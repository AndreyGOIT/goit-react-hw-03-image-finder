import styles from './ImageGalleryItem.module.css';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// Your API key: 30800169-3713389dad872250f057e0e33

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className={styles.ImageGalleryItem}>
            <a
              href={largeImageURL}
              target="_blank"
              rel="noreferrer noopener"
              onClick={onClick}
            >
              <img
                src={webformatURL}
                alt=""
                className={styles.ImageGalleryItemImage}
              />
            </a>
          </li>
        );
      })}
    </>
  );
};
