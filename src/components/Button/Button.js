import React from 'react';
import PropTypes from 'prop-types';

function Button({title, onClick}) {
  return (
      <div className="custom-button">
        <button data-testid='button' onClick={onClick}>{title}</button>
      </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Button
