import React, { useMemo } from 'react';

import './App.css';

import Home from './pages/Home';
import News from './pages/News';

import NavBar from './components/NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import About from './pages/About';

function App() {
  const navigationItems = useMemo(
    () => [
      {
        title: 'Home',
        path: '/',
        element: <Home />,
      },
      {
        title: 'About',
        path: '/about',
        element: <About />,
      },
      {
        title: 'News',
        path: '/news',
        element: <News />,
      },
    ],
    [],
  );
  return (
    <div className="App">
      <NavBar
        pages={navigationItems}
      />
      <AnimatedRoutes routes={navigationItems} />
    </div>
  );
}
export default App;
