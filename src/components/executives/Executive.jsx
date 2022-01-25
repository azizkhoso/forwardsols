import React from 'react';
import styles from './Executive.module.css';

import AwaisShaikh from '../../assets/awais_shaikh.jpg';
import blueArrow from '../../assets/blue-arrow.svg';

function Executive() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="flex flex-wrap w-full">
          <div className={styles['profile-container']}>
            <div className={styles['profile-details']}>
              <div className="flex w-full gap-3">
                <img src={blueArrow} alt="red arrow" className="w-4 h-4 transform rotate-180" />
                <span className="text-xs">Back to Executives</span>
              </div>
              <h1 className={styles['name-heading']}>Awais Shaikh</h1>
              <h6 className={styles['name-sub-heading']}>Chief Executive Officer</h6>
              <p className="w-full mt-12">
                Head of the Pack. Mustafa is serving as Chairman of the Board and CEO
                of Renesis Tech. Mustafa leads Renesis Tech&apos;s strategic development.
                Along with Renesis Tech, Mustafa is also a Board member of Arcadian
                Lab, which focuses on mobile game development working with some of the
                biggest publishers in the world.
              </p>
              <p className="mt-6 text-gray-400">Mustafa received his Bachelors from Western University</p>
            </div>
            <div className={styles.navigator}>
              <div>
                <p className="text-lg font-bold">Usman Rana</p>
                <p className="flex gap-3 text-xs uppercase">
                  <img src={blueArrow} alt="red arrow" className="w-4 h-4 transform rotate-180" />
                  <span>Operations Manager</span>
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">Abdul Wadood</p>
                <p className="flex justify-end gap-3 text-xs uppercase">
                  <span>Designer</span>
                  <img src={blueArrow} alt="red arrow" className="w-4 h-4" />
                </p>
              </div>
            </div>
          </div>
          <div className={styles['image-container']}>
            <img src={AwaisShaikh} alt="ceo" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Executive;
