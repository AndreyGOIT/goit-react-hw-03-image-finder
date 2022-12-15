import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';
import Modal from './Modal';
import { Blocks } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { LoadMoreBtn } from './Button/Button';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// Your API key: 30800169-3713389dad872250f057e0e33

export class App extends Component {
  state = {
    images: [],
    showModal: false,
    isLoading: false,
    error: null,
    // status: 'idle',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      isVisible: false,
      isEmpty: false,
    });
    console.log(this.state);
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
    console.log(params.g);
    this.setState({ isLoading: true });
    setTimeout(() => {
      axios
        .get('https://pixabay.com/api/', { params })
        .then(response => {
          if (response) {
            const currentArray = prevState.images;
            const newArray = response.data.hits;
            console.log(currentArray);
            console.log(newArray);
            return this.setState(prevState => ({
              images: [...currentArray, ...newArray],
            }));
          }
          return Promise.reject(new Error(`No images with name ${query}`));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }, 1000);
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      isVisible: false,
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showModal, isLoading, error } = this.state;

    // if (status === 'idle') {
    //   return;
    // }
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal} images={images}>
            <h1>Здесь будет изображение</h1>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
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
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {images.length && <LoadMoreBtn onClick={this.onLoadMore} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
