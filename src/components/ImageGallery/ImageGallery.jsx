import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className={styles.imageGallery}>
      {
        <ImageGalleryItem
          images={images}
        /> /* <!-- Набор <li> с изображениями --> */
      }
    </ul>
  );
};
