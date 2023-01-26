import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ clickSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = ({ value }) => {
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    clickSubmit(input);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchform}>
        <button type="submit" className={css.searchform_button}>
          <span className={css.searchform_button_label}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={css.searchform_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  clickSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
