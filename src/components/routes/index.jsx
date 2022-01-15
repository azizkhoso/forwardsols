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
import About from '../about';
import Portfolio from '../portfolio';
import ProductDescription from '../portfolio/ProductDescription';

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="absolute inset-0 flex flex-col w-full radial-gradient">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:item" element={<ProductDescription />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
