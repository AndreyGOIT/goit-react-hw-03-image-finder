import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li
            key={id}
            className={styles.ImageGalleryItem}
            onClick={() => onClick(largeImageURL)}
          >
            <img
              src={webformatURL}
              alt=""
              className={styles.ImageGalleryItemImage}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
