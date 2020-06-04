import React from 'react'
import PropTypes from 'prop-types';

function CustomInput({title, onAddElement, onSetElement, element}) {
  return (
    <div className="text-input">
      <input
        type="text"
        id="inputArray"
        value={element || ''}
        placeholder="Enter the elements of the array"
        onChange={e => onSetElement(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onAddElement();
          }
        }}
      />
      <label htmlFor="inputArray">{title}</label>
    </div>
  )
}

CustomInput.propTypes = {
  title: PropTypes.string,
  onAddElement: PropTypes.func,
  onSetElement: PropTypes.func,
  element: PropTypes.string
};

export default CustomInput
