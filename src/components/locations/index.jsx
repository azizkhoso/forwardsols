import React from 'react';
import styles from './Locations.module.css';

import canada from '../../assets/canada.jpg';
import pakistan from '../../assets/pakistan.jpg';

function Locations() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className={styles['locations-container']}>
          <div className={styles['slogan-container']}>
            <h3 className="m-auto text-3xl uppercase">
              <span className="font-extrabold">Simplifying</span>
              &nbsp;
              the complexity of&nbsp;
              <span className="font-extrabold">the tech world</span>
            </h3>
          </div>
          <div className={styles.location}>
            <img src={canada} alt="canada" className={styles['location-img']} />
            <p className={styles['location-title']}>
              <span className={styles['company-name']}>Forwardsols</span>
              <span className="text-lg font-bold">Canada</span>
            </p>
            <div className={styles['location-details']}>
              <div className="bg-black">Details here</div>
            </div>
          </div>
          <div className={styles.location}>
            <img src={pakistan} alt="pakistan" className={styles['location-img']} />
            <p className={styles['location-title']}>
              <span className={styles['company-name']}>Forwardsols</span>
              <span className="text-lg font-bold">Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
