import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';

function TrailerModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bg-dark">
        <Ratio aspectRatio="16x9">
          <iframe
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
