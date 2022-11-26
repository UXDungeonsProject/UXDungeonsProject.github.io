import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoImage from '../assets/img/aetherstudios-logo-small.webp';

function NavBar({ pages }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: 1,
      }}
    >
      <Navbar expand="md">
        <Container>
          <a
            href="https://aetherstudios.com"
            className="nav-logo"
          >
            <img
              src={`${logoImage}`}
              alt="Aether Studios Logo"
              width="140"
              height="57"
            />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {pages.map((page) => (
                <Link
                  key={page.title}
                  to={page.path}
                  className="nav-link"
                >
                  {page.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NavBar;
