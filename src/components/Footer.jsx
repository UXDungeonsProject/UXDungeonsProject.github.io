import React from 'react';
import steam from '../assets/img/footer-steam.svg';
import twitter from '../assets/img/footer-twitter.svg';

const footTag = '@ Aether Studios';

const footerStyle = {
  width: '100%',
  height: '90px',
  backgroundColor: '#080403',
  color: '#FFF',
  textAlign: 'right',
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
};

const footerIcon = {
  marginLeft: '10px',
  marginRight: '10px',
};

function Footer() {
  return (
    <div style={footerStyle}>
      <div>
        {footTag}
        <a
          style={footerIcon}
          href="https://store.steampowered.com/app/1668290/Dungeons_of_Aether/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            style={footerIcon}
            src={`${steam}`}
            alt="steam logo"
          />
        </a>
        <a
          href="https://twitter.com/StudiosOfAether"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            style={footerIcon}
            src={`${twitter}`}
            alt="steam logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
