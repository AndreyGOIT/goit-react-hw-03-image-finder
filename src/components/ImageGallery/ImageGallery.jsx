import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul class="gallery">
      {
        <ImageGalleryItem
          images={images}
        /> /* <!-- Набор <li> с изображениями --> */
      }
    </ul>
  );
};
