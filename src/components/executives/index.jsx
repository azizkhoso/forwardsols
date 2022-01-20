import React from 'react';

import { Link, Routes, Route } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from './Executives.module.css';

import AwaisShaikh from '../../assets/awais_shaikh.jpg';
import Executive from './Executive';

const handleDragStart = (e) => e.preventDefault();

function Executives() {
  const exectives = [
    { name: 'Abdul Salam', img: AwaisShaikh, designation: 'Developer' },
    { name: 'Awais Shaikh', img: AwaisShaikh, designation: 'Chief Executive Officer' },
    { name: 'Usman', img: AwaisShaikh, designation: 'Operations Manager' },
    { name: 'Abdul Wadood', img: AwaisShaikh, designation: 'Developer' },
    { name: 'Salman Saleem', img: AwaisShaikh, designation: 'Developer' },
  ];
  const list = exectives.map((e) => (
    <Link to={`/executives/${e.name}`}>
      <div onDragStart={handleDragStart} className={styles.slide} style={{ backgroundImage: `url(${e.img})` }}>
        <div className="w-full mt-auto">
          <p className={styles['slide-title']}>{e.name}</p>
          <p className={styles.designation}>{e.designation}</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <Routes>
      <Route
        index
        element={(
          <div className="page-container">
            <div className="md:px-0 page-content">
              <AliceCarousel
                autoPlay
                infinite
                animationEasingFunction="ease"
                disableDotsControls
                disableButtonsControls
                autoPlayInterval="2000"
                animationDuration="1000"
                mouseTracking
                items={list}
                responsive={{
                  0: { items: 1 },
                  600: { items: 2 },
                  900: { items: 3 },
                  1200: { items: 4 },
                  1500: { items: 6 },
                }}
              />
            </div>
          </div>
        )}
      />
      <Route path="/:name" element={<Executive />} />
    </Routes>
  );
}

export default Executives;
