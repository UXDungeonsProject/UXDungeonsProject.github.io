import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DungeonButtonSvg from '../assets/img/dungeon-button.svg';
import DungeonButtonHighlightSvg from '../assets/img/dungeon-button-highlight.svg';
import SteamIcon from './SteamIcon';
import YoutubeIcon from './YoutubeIcon';

function DungeonButton({ text, onClick, variant }) {
  const [isHover, setIsHover] = useState(false);

  const hoverTextColor = 'rgba(238, 163, 53, 0.87)';
  const defaultTextColor = 'rgba(255, 255, 255, 0.87)';

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const DungeonButtonStyle = {
    margin: 'auto',
    width: '175px',
    WebkitFilter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))',
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
    cursor: 'pointer',
    gridColumn: '1',
    gridRow: '1',
    zIndex: '1',
    transition: '0.1s',
  };

  const DungeonButtonTextStyle = {
    margin: 'auto',
    gridColumn: '1',
    gridRow: '1',
    zIndex: '2',
    pointerEvents: 'none',
    transition: '0.1s',
    color: (isHover) ? hoverTextColor : defaultTextColor,
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
  };

  const getIcon = (iconVariant) => {
    const iconColor = (isHover) ? hoverTextColor : defaultTextColor;
    if (iconVariant === 'Steam') {
      return (
        <SteamIcon color={iconColor} style={{ marginBottom: '20px' }} />
      );
    } if (iconVariant === 'Youtube') {
      return (
        <YoutubeIcon color={iconColor} />
      );
    }
    return null;
  };

  return (
    <div className="dungeon-button">
      <div className="d-grid">
        <p style={DungeonButtonTextStyle} className="button-text">
          {text}
          {' '}
          {getIcon(variant)}
        </p>
        <input
          type="image"
          src={(isHover) ? DungeonButtonHighlightSvg : DungeonButtonSvg}
          alt="Button"
          style={DungeonButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

DungeonButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default DungeonButton;
