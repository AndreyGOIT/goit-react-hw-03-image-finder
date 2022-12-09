import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';
import Modal from './Modal';
// import { ToastContainer } from 'react-toastify';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// Your API key: 30800169-3713389dad872250f057e0e33

export class App extends Component {
  state = {
    images: [],
    showModal: false,
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

  async componentDidMount() {
    // console.log(this.state);
    // console.log(this.state.query);
    const response = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=30800169-3713389dad872250f057e0e33&image_type=photo&orientation=horizontal&per_page=12'
    );
    // console.log(response.data.hits);
    this.setState({ images: response.data.hits });
    // console.log(this.state.images);
  }

  // onLoadMore = () => {
  //   this.setState(prevState => ({
  //     isVisible: false,
  //     page: prevState.page + 1,
  //   }));
  // };

  render() {
    const { images, showModal } = this.state;
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
        {images.length && <ImageGallery images={images} />}
        {/* <ToastContainer auroclose={3000} /> */}
      </div>
    );
  }
}
