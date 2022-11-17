import React from 'react';
import PropTypes from 'prop-types';
import Mask from './Mask';

import PaperEdgeMask from '../assets/img/paper-edge-mask.svg';

function SecondarySection({ children }) {
  return (
    <Mask mask="linear-gradient(to top, transparent 5%, #fff 15% 90%)">
      <div className="section-container" style={{ marginTop: '-5rem' }}>
        <Mask mask={`url(${PaperEdgeMask})`}>
          {children}
        </Mask>
      </div>
    </Mask>
  );
}

SecondarySection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondarySection;
