// axios.defaults.baseURL = 'https://pixabay.com/api/';
// Your API key: 30800169-3713389dad872250f057e0e33

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} class="gallery-item">
            <a href={largeImageURL} target="_blank" rel="noreferrer noopener">
              <img src={webformatURL} alt="" />
            </a>
          </li>
        );
      })}
    </>
  );
};
