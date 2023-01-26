import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({clickMore}) => {

    return (
      <div className={css.loadmore_box}>
            <button className={css.button}
            onClick={e => clickMore(e)} >Load more</button>
      </div>
    );
  }


Button.propTypes = {
  clickMore: PropTypes.func.isRequired,
};

export default Button;
