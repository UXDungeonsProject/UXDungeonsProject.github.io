import React from 'react';
import PropTypes from 'prop-types';
import Mask from './Mask';

function MainSection({ children }) {
  return (
    <Mask mask="linear-gradient(to top, transparent 5%, #fff 15% 90%)">
      {children}
    </Mask>
  );
}

MainSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSection;
