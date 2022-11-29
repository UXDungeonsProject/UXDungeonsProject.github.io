import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoImage from '../assets/img/aetherstudios-logo-small.webp';

function checkToHideNews(pages) {
  const location = useLocation();
  const re = /^\/news\/[^*]+$/;
  const hideNews = re.test(location.pathname);

  if (hideNews) {
    return pages.filter((page) => page.path !== '/news/*');
  }
  return pages;
}

function NavBar({ pages }) {
  const navPages = checkToHideNews(pages);

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
              {navPages.map((page) => (
                <NavLink
                  key={page.title}
                  to={page.path}
                  className={({ isActive }) => `nav-link${!isActive ? ' ' : ' selected'}`}
                >
                  {page.title}
                </NavLink>
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
