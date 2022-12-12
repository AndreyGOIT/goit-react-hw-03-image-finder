import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';
import Modal from './Modal';
import { Blocks } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

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
      this.getPhotos(query, page);
    }
  };
  getPhotos = (query, page) => {
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
            return this.setState({ images: response.data.hits });
          }
          return Promise.reject(new Error(`No images with name ${query}`));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
      // .finally(this.setState({ page: 1 }));
    }, 1000);
  };
  // onLoadMore = () => {
  //   this.setState(prevState => ({
  //     isVisible: false,
  //     page: prevState.page + 1,
  //   }));
  // };

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
          <Modal onClose={this.toggleModal}>
            <h1>Здесь будет изображение</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, error magnam. Illum non, harum obcaecati aliquid
              deserunt eligendi optio in vero dolorum dicta ea aliquam, suscipit
              mollitia dolor sunt impedit?
            </p>
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
        {images.length && <ImageGallery images={images} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
