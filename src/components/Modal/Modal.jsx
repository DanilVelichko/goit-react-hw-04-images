import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ clickModal, imgUrl }) => {

useEffect(() => {
  window.addEventListener('keydown', clickModal)

  

  return () => {
    window.removeEventListener('keydown', clickModal);
  }
}, [clickModal])

  return (
    <div className={css.overlay} onClick={clickModal}>
      <div className={css.modal}>
        <img src={imgUrl} alt="" onClick={clickModal} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  clickModal: PropTypes.func.isRequired,
};
export default Modal;
