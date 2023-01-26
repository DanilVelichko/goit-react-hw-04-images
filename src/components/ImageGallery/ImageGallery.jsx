import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  handleImageClick = (e) => {
     this.props.clickImage(e.target.id)
  }
  render() {
    const { images } = this.props;
    return (
      <ul className={css.gallery} onClick={this.handleImageClick}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              id={image.id}
              key={image.id}
              smallFoto={image.webformatURL}
              largeFoto={image.largeImageURL}
              alt={image.tags}
            />
          );
        })}
      </ul>
    );
  }
}

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
