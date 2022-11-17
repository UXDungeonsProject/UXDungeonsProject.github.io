import React from 'react';
import PropTypes from 'prop-types';

function Mask({ mask, children }) {
  return (
    <div style={{
      WebkitMaskImage: mask,
      maskImage: mask,
      WebkitMaskSize: 'cover',
      maskSize: 'cover',
      width: '100%',
      height: '100%',
    }}
    >
      {children}
    </div>
  );
}

Mask.propTypes = {
  mask: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Mask;
