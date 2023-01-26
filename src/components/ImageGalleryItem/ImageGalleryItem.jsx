import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallFoto, largeFoto, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={smallFoto}
        alt={alt}
        id={largeFoto}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallFoto: PropTypes.string.isRequired,
  largeFoto: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
