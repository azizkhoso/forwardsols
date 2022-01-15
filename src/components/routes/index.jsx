import React from 'react';

import {
  Routes,
  Route,
  useLocation,
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
  const { pathname } = useLocation();
  return (
    <>
      <Topbar />
      <div className={`absolute inset-x-0 top-0 flex flex-col w-full radial-gradient ${pathname !== '/contact' && 'h-full'}`}>
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
    </>
  );
}
