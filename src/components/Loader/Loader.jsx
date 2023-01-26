import React from "react";
import PropTypes from 'prop-types';
import css from './Loader.module.css'
import ClockLoader from 'react-spinners/ClockLoader';

const Loader = ({ color, loading, size }) => {
    return (
        <div className={css.parent}>
            <ClockLoader
            color={color}
            loading={loading}
            size={size}
            />
            </div>
    )
}

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

export default Loader;