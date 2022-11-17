import React, { useState } from 'react';
import '../App.css';

import SecondarySection from '../components/SecondarySection';
import MainSection from '../components/MainSection';
import TrailerModal from '../components/TrailerModal';

import PromoBackgroundImage from '../assets/img/dungeons-of-aether-promo-background-recentered.jpg';
import SceneryBackgroundImage from '../assets/img/dungeons-of-aether-scenery-background.jpg';
import DungeonsLogo from '../assets/img/DUNGEONSofAETHER_logo-optimized.png';
import charactersGrouped from '../assets/img/characters_grouped.png';

import DungeonButton from '../components/DungeonButton';

function Home() {
  return (
    <div className="home bg-dark">
      <MainSection><LogoSection /></MainSection>
      <SecondarySection><AboutSection /></SecondarySection>
      <SecondarySection><AboutSection /></SecondarySection>
    </div>
  );
}

function LogoSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const promoBgStyle = {
    backgroundImage: `url(${PromoBackgroundImage})`,
    height: '900px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <div className="promo-bg d-flex flex-column justify-content-center" style={promoBgStyle}>
      <div style={{ height: '100px' }} />
      <div className="flex-fill">
        <img className="dungeons-logo" src={DungeonsLogo} alt="Dungeons of Aether Logo" />
      </div>
      <div className="flex-fill d-flex justify-content-center">
        <TrailerModal show={show} handleClose={handleClose} />
        <DungeonButton variant="Youtube" text="Trailer" onClick={handleShow} />
        <DungeonButton variant="Steam" text="Wishlist" onClick={() => {}} />
      </div>
      <div className="flex-fill" />
      <div className="flex-fill" />
    </div>
  );
}

function AboutSection() {
  const aboutText = [
    'ABOUT THE GAME',
    'DELVE INTO DUNGEONS OF AETHER',
    'Dungeons of Aether is a turn-based dungeon crawler set in the Rivals of Aether universe. Control four new heroes as they uncover the mysteries of the Julesvale Caverns in Story Mode or test your mettle in the grueling Challenge Dungeons.',
  ];

  const aboutBgStyle = {
    backgroundImage: `url(${SceneryBackgroundImage})`,
  };

  return (

    <div className="about-bg" style={aboutBgStyle}>
      <div className="about div1">
        <img
          src={charactersGrouped}
          alt="Group of Characters"
          style={{
            float: 'right',
            width: '100%',
            minWidth: '350px',
            maxWidth: '830px',
          }}
        />
      </div>
      <div className="about div2">
        <div style={{ maxWidth: '550px', margin: 'auto' }}>
          <h4 style={{ marginBottom: '0.25rem' }}>{aboutText[0]}</h4>
          <h1 style={{ lineHeight: '1' }}>{aboutText[1]}</h1>
          <p style={{ fontSize: '16px' }}>{aboutText[2]}</p>
        </div>
      </div>
      <div className="about div3">
        <DungeonButton text="Learn More" onClick={() => {}} />
      </div>
    </div>
  );
}

export default Home;
