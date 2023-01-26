import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, clickImage }) => {
  return (
    <ul className={css.gallery} onClick={e => clickImage(e.target.id)}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            id={id}
            key={id}
            smallFoto={webformatURL}
            largeFoto={largeImageURL}
            alt={tags}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      key: PropTypes.number,
      smallFoto: PropTypes.string,
      largeFoto: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  clickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
