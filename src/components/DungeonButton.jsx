import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DungeonButtonSvg from '../assets/img/dungeon-button.svg';
import DungeonButtonHighlightSvg from '../assets/img/dungeon-button-highlight.svg';
import SteamIcon from './SteamIcon';
import YoutubeIcon from './YoutubeIcon';

function DungeonButton({
  text, onClick, variant, hover, path,
}) {
  const [isHover, setIsHover] = useState(hover !== null ? hover : false);

  const hoverTextColor = 'rgba(238, 163, 53, 0.87)';
  const defaultTextColor = 'rgba(255, 255, 255, 0.87)';

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    if (!hover) {
      setIsHover(false);
    }
  };

  useEffect(() => {
    if (hover != null) {
      setIsHover(hover);
    }
  }, [hover]);

  const DungeonButtonHighlightStyle = {
    margin: 'auto',
    width: '175px',
    WebkitFilter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))',
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
    cursor: 'pointer',
    gridColumn: '1',
    gridRow: '1',
    zIndex: '0',
  };

  const DungeonButtonTextStyle = {
    margin: 'auto',
    gridColumn: '1',
    gridRow: '1',
    zIndex: '2',
    pointerEvents: 'none',
    transition: '0.2s',
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
        <img src={DungeonButtonHighlightSvg} style={DungeonButtonHighlightStyle} alt="Button" />
        <ButtonElement
          onClick={onClick}
          isHover={isHover}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          path={path}
        />
      </div>
    </div>
  );
}

function ButtonElement({
  onClick, isHover, handleMouseEnter, handleMouseLeave, path,
}) {
  const DungeonButtonStyle = {
    margin: 'auto',
    width: '175px',
    WebkitFilter: (isHover) ? 'opacity(0)' : 'opacity(1)',
    filter: (isHover) ? 'opacity(0)' : 'opacity(1)',
    cursor: 'pointer',
    gridColumn: '1',
    gridRow: '1',
    zIndex: '1',
    transition: '0.2s',
  };

  if (path) {
    return (
      <Link
        style={DungeonButtonStyle}
        to={path}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img style={DungeonButtonStyle} src={DungeonButtonSvg} alt="Button" />
      </Link>
    );
  }
  return (
    <input
      type="image"
      src={DungeonButtonSvg}
      alt="Button"
      style={DungeonButtonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    />
  );
}

export default DungeonButton;
