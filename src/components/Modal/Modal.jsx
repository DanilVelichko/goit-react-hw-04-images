import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ clickModal, imgUrl }) => {

useEffect(() => {
  window.addEventListener('keydown', e => clickModal(e.code))

  return () => {
    window.removeEventListener('keydown', e => clickModal(e.code));
  }
}, [clickModal])

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
