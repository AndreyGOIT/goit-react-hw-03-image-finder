import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';
import Modal from './Modal';
import { Blocks } from 'react-loader-spinner';
// import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { LoadMoreBtn } from './Button/Button';
import styles from '../components/App.module.css';

export class App extends Component {
  state = {
    images: [],
    showModal: false,
    isLoading: false,
    error: null,
    largeImage: null,
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
    const params = {
      g: query,
      page: page,
      key: '30800169-3713389dad872250f057e0e33',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    };
    this.setState({ isLoading: true });
    axios
      .get('https://pixabay.com/api/', { params })
      .then(response => {
        if (response) {
          const currentArray = prevState.images;
          const newArray = response.data.hits;

          return this.setState(prevState => ({
            images: [...currentArray, ...newArray],
          }));
        }
        return Promise.reject(new Error(`No images with name ${query}`));
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
    const { images, showModal, isLoading, error, largeImage } = this.state;

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
        {images.length && (
          <ImageGallery images={images} onClick={this.onLargeImageURL} />
        )}
        {images.length && <LoadMoreBtn onClick={this.onLoadMore} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
