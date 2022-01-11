import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../home';
import Topbar from '../topbar';
import Footer from '../footer';
import Contact from '../contact';
import Services from '../services';

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="absolute inset-0 flex flex-col w-full radial-gradient">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
