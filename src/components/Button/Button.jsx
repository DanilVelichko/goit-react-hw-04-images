import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends React.Component {

    handleLoadMore = (e) => {
    this.props.clickMore(e)
}

  render() {
    return (
      <div className={css.loadmore_box}>
            <button className={css.button}
            onClick={() => this.handleLoadMore()} >Load more</button>
      </div>
    );
  }
}

Button.propTypes = {
  clickMore: PropTypes.func.isRequired,
};
export default Button;
