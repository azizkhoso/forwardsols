import React from 'react';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import AllRoutes from './components/routes';

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
