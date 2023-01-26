import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ clickModal, imgUrl }) => {
  return (
    <div className={css.overlay} onClick={e => clickModal(e.code)}>
      <div className={css.modal}>
        <img src={imgUrl} alt="" onClick={e => e.stopPropagation()} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  clickModal: PropTypes.func.isRequired,
};
export default Modal;
