import React, { useState } from 'react';
import Mask from '../components/Mask';
import '../App.css';

import DungeonsLogo from '../assets/img/DUNGEONSofAETHER_logo-optimized.png';
import SceneryBackgroundImage from '../assets/img/dungeons-of-aether-env-concept.jpg';
import Footer from '../components/Footer';
import charactersGrouped from '../assets/img/characters_grouped.png';

function About() {
  return (
    <div className="home bg-dark">
      <AboutSection />
      <Footer />
    </div>
  );
}

function AboutSection() {
  const aboutText = [
    'ABOUT THE GAME',
    'DELVE INTO DUNGEONS OF AETHER',
    'Dungeons of Aether is a turn-based dungeon crawler set in the Rivals of Aether universe. Control four new heroes as they uncover the mysteries of the Julesvale Caverns in Story Mode or test your mettle in the grueling Challenge Dungeons.',
    'Dungeons of Aether is designed by ',
    'Nick ‘ampersandbear’ Blackwood',
    ' from the Aether Studios team. Rivals of Aether is known for its intense competition and twitch skills, while Dungeons of Aether allows you to take things at your own pace - but it’s still just as challenging!  Every choice you make can lead you deeper into the dungeons or to an early demise. Will you carry out a treasure chest, or be carried out in a pine box?',
  ];

  const aboutBgStyle = {
    backgroundImage: `url(${SceneryBackgroundImage})`,
  };

  return (
    <GradientMask>
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
          <div style={{ maxWidth: '550px', margin: 'auto' }}>
            <img
              style={{ margin: 'auto', display: 'block', width: '300px' }}
              src={DungeonsLogo}
              alt="Dungeons of Aether Logo"
            />
            <p style={{ marginBottom: '0.25rem' }}>
              {aboutText[3]}
              <a
                className="text-primary"
                href="https://twitter.com/ampersandbear"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                {aboutText[4]}
              </a>
              {aboutText[5]}
            </p>
          </div>
        </div>
      </div>
    </GradientMask>
  );
}

function GradientMask({ children }) {
  return (
    <Mask mask="linear-gradient(to top, transparent 5%, #fff 15% 90%)">
      {children}
    </Mask>
  );
}

export default About;
