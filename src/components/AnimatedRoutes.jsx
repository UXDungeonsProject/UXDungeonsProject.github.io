import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ routes }) {
  return (
    <AnimatePresence>
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
