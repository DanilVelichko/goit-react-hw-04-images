import React from 'react';
import css from './Errors.module.css';


const Errors = () => {
    return (
      <div className={css.errors_box}>
        <h3 className={css.errors_text}>There is no results by your request...</h3>
      </div>
    );
  }

export default Errors;
