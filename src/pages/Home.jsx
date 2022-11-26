import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Mask from '../components/Mask';
import '../App.css';

import TrailerModal from '../components/TrailerModal';
import PaperEdgeMask from '../assets/img/paper-edge-mask.svg';
import PromoBackgroundImage from '../assets/img/dungeons-of-aether-promo-background-recentered.jpg';
import SceneryBackgroundImage from '../assets/img/dungeons-of-aether-env-concept.jpg';
import DungeonsLogo from '../assets/img/DUNGEONSofAETHER_logo-optimized.png';
import charactersGrouped from '../assets/img/characters_grouped.png';
import DungeonButton from '../components/DungeonButton';
import Footer from '../components/Footer';
import NewsFeed from '../components/NewsFeed';

function Home() {
  return (
    <div className="home bg-dark">
      <LogoSection />
      <AboutSection />
      <NewsSection />
      <Footer />
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
    marginTop: '-80px',
  };

  return (
    <GradientMask>
      <div
        className="promo-bg d-flex flex-column justify-content-center"
        style={promoBgStyle}
      >
        <div style={{ height: '100px' }} />
        <div className="flex-fill">
          <img
            className="dungeons-logo"
            src={DungeonsLogo}
            alt="Dungeons of Aether Logo"
          />
        </div>
        <div className="flex-fill d-flex justify-content-center">
          <TrailerModal
            show={show}
            handleClose={handleClose}
          />
          <DungeonButton
            variant="Youtube"
            text="Trailer"
            onClick={handleShow}
          />
          <DungeonButton
            variant="Steam"
            text="Wishlist"
            onClick={() => {}}
          />
        </div>
        <div className="flex-fill" />
        <div className="flex-fill" />
      </div>
    </GradientMask>
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
    <TornPaperMask>
      <GradientMask>
        <div
          className="about-bg"
          style={aboutBgStyle}
        >
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
            <DungeonButton
              text="Learn More"
              onClick={() => {}}
            />
          </div>
        </div>
      </GradientMask>
    </TornPaperMask>
  );
}

function NewsSection() {
  const newsBgStyle = {
    backgroundImage: `url(${SceneryBackgroundImage})`,
    backgroundSize: 'cover',
    padding: '100px 10px',
  };

  return (
    <TornPaperMask>
      <div
        className="home-news-feed"
        style={newsBgStyle}
      >
        <NewsFeed />
      </div>
    </TornPaperMask>
  );
}

function GradientMask({ children }) {
  return (
    <Mask mask="linear-gradient(to top, transparent 5%, #fff 15% 90%)">
      {children}
    </Mask>
  );
}

GradientMask.propTypes = {
  children: PropTypes.node.isRequired,
};

function TornPaperMask({ children }) {
  return (
    <div style={{ marginTop: '-5rem' }}>
      <Mask mask={`url(${PaperEdgeMask})`}>{children}</Mask>
    </div>
  );
}

TornPaperMask.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
