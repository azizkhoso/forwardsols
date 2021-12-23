import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../home';
import Topbar from '../topbar';

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-black">
        <Topbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
