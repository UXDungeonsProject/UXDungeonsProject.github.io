import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mask from './components/Mask';

import './App.css';

import Home from './pages/Home';
import Characters from './pages/Characters';
import News from './pages/News';
import Modes from './pages/Modes';
import PaperEdgeMask from './assets/img/paper-edge-mask.svg';

import NavBar from './components/NavBar';

function App() {
  const navbarLogo = useMemo(() => {
    <a
      href="https://aetherstudios.com"
      className="nav-logo"
    >
      <img
        src="assets/img/aetherstudios-logo-small.webp"
        alt="Aether Studios Logo"
        width="140"
        height="57"
      />
    </a>;
  });
  const navigationItems = useMemo(() => [
    {
      title: 'Home',
      path: '/',
      element: <Home />,
    },
    {
      title: 'Characters',
      path: '/characters',
      element: <Characters />,
    },
    {
      title: 'News',
      path: '/News',
      element: <News />,
    },
    {
      title: 'Modes',
      path: '/modes',
      element: <Modes />,
    },
  ]);
  return (
    <div className="App">
      <NavBar
        logo={navbarLogo}
        pages={navigationItems}
      />
      <Routes>
        {navigationItems.map(({ title, path, element }) => (
          <Route
            key={title}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </div>
  );
}
export default App;
