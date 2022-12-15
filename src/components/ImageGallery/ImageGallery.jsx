import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
  console.log(images);
  return (
    <ul className={styles.imageGallery}>
      {
        <ImageGalleryItem
          images={images}
          onClick={onClick}
        /> /* <!-- Набор <li> с изображениями --> */
      }
    </ul>
  );
};
