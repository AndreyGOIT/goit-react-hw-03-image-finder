import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import axios from 'axios';
import Modal from './Modal';
import { Blocks } from 'react-loader-spinner';
// import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { LoadMoreBtn } from './Button/Button';
import styles from '../components/App.module.css';
import { fetchImages } from './FetchImages/FetchImages';

export class App extends Component {
  state = {
    images: [],
    showModal: false,
    isLoading: false,
    error: null,
    largeImage: null,
    showBtn: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onLargeImageURL = largeImageURL => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ largeImage: largeImageURL });
  };

  onSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      isVisible: false,
      isEmpty: false,
    });
  };

  componentDidUpdate = (_, prevState) => {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page, prevState);
    }
  };
  getPhotos = (query, page, prevState) => {
    // const params = {
    //   query: query,
    //   page: page,
    //   key: '30800169-3713389dad872250f057e0e33',
    //   image_type: 'photo',
    //   orientation: 'horizontal',
    //   per_page: '12',
    // };
    this.setState({ isLoading: true });
    console.log(query);
    // axios
    //   .get('https://pixabay.com/api/', { params })
    fetchImages(query, page)
      .then(response => {
        if (response) {
          const currentArray = prevState.images;
          const newArray = response.data.hits;
          const totalHits = response.data.totalHits;

          return this.setState(prevState => ({
            images: [...currentArray, ...newArray],
            showBtn: this.state.page < Math.ceil(totalHits / 12),
          }));
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      isVisible: false,
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showModal, isLoading, error, largeImage, showBtn } =
      this.state;

    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImage}>
            <button
              className={styles.button}
              type="button"
              onClick={this.toggleModal}
            >
              X
            </button>
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && (
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        )}
        {error && <h1>{error.message}</h1>}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.onLargeImageURL} />
        )}
        {showBtn && <LoadMoreBtn onClick={this.onLoadMore} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
