import React from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    input: '',
  };
  handleChange = e => {
    this.setState({
      input: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clickSubmit(this.state.input);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchform}>
          <button type="submit" className={css.searchform_button}>
            <span className={css.searchform_button_label}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.searchform_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  clickSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
