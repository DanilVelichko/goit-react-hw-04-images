import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEscape);
  }

  handlePressEscape = event => {
    this.props.clickModal(event.code);
  };
  render() {
    const { imgUrl } = this.props;
    return (
      <div className={css.overlay} onClick={this.handlePressEscape}>
        <div className={css.modal}>
          <img src={imgUrl} alt="" onClick={e => e.stopPropagation()} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  clickModal: PropTypes.func.isRequired,
};
export default Modal;
