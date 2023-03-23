import React from 'react';

function Button(props) {
  const { children, type = 'button', onClick } = props;
  return (
    <button type={ type } onClick={ onClick }>
      { children }
    </button>
  )
}

export default Button;
