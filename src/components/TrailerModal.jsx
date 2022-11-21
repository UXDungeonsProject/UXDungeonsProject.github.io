import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';

import TornPaperBackdrop from './TornPaperBackdrop';

const orangeGlow = '#ff993385';

const modalBackdropStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  filter: `drop-shadow(0px 0px 20px ${orangeGlow}`,
};

function TrailerModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <TornPaperBackdrop color="#281d17" style={modalBackdropStyle} />
      <Modal.Body>
        <Ratio aspectRatio="16x9" className="fmdsofndsuifndsuif">
          <iframe
            style={{ filter: 'drop-shadow(0px 0px 20px #60402085' }}
            title="trailer"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/qyOPt3iH1Mg"
            allowfullscreen
          />
        </Ratio>
      </Modal.Body>
    </Modal>
  );
}

TrailerModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TrailerModal;
