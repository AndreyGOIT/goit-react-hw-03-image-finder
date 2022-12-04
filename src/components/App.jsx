import React, { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import axios from 'axios';
import Modal from './Modal';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// Your API key: 30800169-3713389dad872250f057e0e33

// const ImageGallery = ({ imageGallery }) => (
//   <ul>
//     {imageGallery.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

export class App extends Component {
  state = {
    images: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get('/search?query=react');
  //   this.setState({ images: response.data.hits });
  // }

  render() {
    // const { images } = this.state;
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Modal />
        {/* <Searchbar />
        {images.length > 0 ? <ImageGallery images={images} /> : null}
        <ImageGallery /> */}
      </div>
    );
  }
}
