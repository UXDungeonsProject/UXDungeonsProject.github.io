import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

function AnimatedRoutes({ routes }) {
  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes>
        {routes.map(({ title, path, element }) => (
          <Route
            key={title}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
