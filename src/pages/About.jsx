import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mask from '../components/Mask';
import '../App.css';

import PaperEdgeMask from '../assets/img/paper-edge-mask.svg';
import DungeonsLogo from '../assets/img/DUNGEONSofAETHER_logo-optimized.png';
import SceneryBackgroundImage from '../assets/img/dungeons-of-aether-env-concept.jpg';
import Footer from '../components/Footer';
import charactersGrouped from '../assets/img/characters_grouped.png';
import Artemis from '../assets/img/Dungeon_steampage_heroes_artemis.png';
import Fleet from '../assets/img/Dungeon_steampage_heroes_fleet.png';
import Hamir from '../assets/img/Dungeon_steampage_heroes_hamir.png';
import Slade from '../assets/img/Dungeon_steampage_heroes_slade.png';
import Story from '../assets/img/Dungeon_steampage_storymode.png';
import Challenge from '../assets/img/Dungeon_steampage_challengedungeons.png';
import HamirGif from '../assets/img/hamir-geode.gif';

function About() {
  return (
    <div className="home bg-dark">
      <AboutSection />
      <CharacterSection />
      <ModeSection />
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

function CharacterSection() {
  return (
    <TornPaperMask>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fleet}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fleet</h3>
            <p>
              Fleet is the self-proclaimed protector of her hometown of Julesvale,
              although she&apos;s seen as a clumsy
              menace more than a hero. As the jack of all trades,
              Fleet is a great character for learning the combat system.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Artemis}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Artemis</h3>
            <p>
              Artemis is a renowned general in the Fire Mora who often fought alongside Zetterburn.
              She was sent to Julesvale by Emperor Loxodont on a secret mission.
              Artemis can heal her wounds in battle, showing off her innate regeneration abilities.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slade}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Slade</h3>
            <p>
              Slade is a pirate from the far-off Polekai Islands. He has made his way to
              Julesvale hunting a mysterious rare mineral unique to Julesvale.
              Rumor has it the mineral is key to saving his homeland.
              Slade&apos;s style and swagger allow him to dodge attacks
              entirely if his speed is high enough.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="d-block w-100"
              src={Hamir}
              alt="Fourth slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Hamir</h3>
            <p>
              Hamir is a former Wall Runner from the mighty Rock Wall.
              He has made his way to Julesvale in exile after losing his trusted partner.
              Hamir now finds himself looking for a purpose
              and the courage to carry on.
              Hamir is strong and sturdy,
              weathering blows until the time is right to crush his foes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </TornPaperMask>
  );
}

function ModeSection() {
  return (
    <div>
      <div className="largermargins">
        <img
          className="d-block w-100"
          src={Story}
          alt="First slide"
        />
        <p className="whitetext">
          The world of Aether is expanding and Dungeons of Aether adds a new,
          fascinating facet to the ever-expanding lore!
          Travel to the steam-punk town of Julesvale and
          brave the sprawling caverns underneath it.
          In Story Mode, you&apos;ll play a roguelite adventure
          that has you starting each dive from town.
          There you can interact with towns folk and spend
          your hard-earned gold to gear up for your next run.
        </p>
        <img
          className="d-block mx-auto"
          src={HamirGif}
          alt="HamirGif"
        />
        <p className="whitetext">
          Each of the dungeons you&apos;ll dive into
          have new challenges to face and rewards to collect.
          As you dive into Julesvale Mines, the Lava Caves,
          the Underground Oasis and the Mineral Deposits,
          you&apos;ll be able to collect Journal Entries that
          reveal even more about Julesvale and its legendary past.
        </p>
      </div>
      <div className="largermargins">
        <img
          className="d-block w-100"
          src={Challenge}
          alt="Second slide"
        />
        <p className="whitetext">
          Story Mode gives you a chance to casually prepare,
          interact with NPCs, and savor the exploration of the world,
          In Challenge Dungeons it&apos;s all up to you!.
          The Challenge Dungeons also feature a leaderboard based on how
          much gold you have at the end of the run.
          Will you spend your gold to make sure you can get through or are you greedy?
        </p>
        <p className="whitetext">
          For those of you looking for true roguelike difficulty,
          the Challenge Dungeons are where you will want to test your skills.
          Each Challenge Dungeon is randomly generated with unique rules and starting equipment.
          Your mission is to go through all of the biomes in the game in a single run.
        </p>
      </div>
    </div>
  );
}

function TornPaperMask({ children }) {
  return (
    <div style={{ marginTop: '-5rem' }}>
      <Mask mask={`url(${PaperEdgeMask})`}>{children}</Mask>
    </div>
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
