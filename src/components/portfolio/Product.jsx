import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import blueArrow from '../../assets/blue-arrow.svg';

import styles from './Product.module.css';

function Cover() {
  return (
    <div
      className={styles['product-cover']}
    >
      <p className={styles['cover-title']}>E-Commerce</p>
      <hr className={styles['cover-hr']} />
      <p className="w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Minima maiores, rem esse dicta voluptatibus quod amet nam quidem at,
        reprehenderit quam!
      </p>
      <span className="flex-grow" />
      <Link to="/portfolio/snapstore">
        <p className={styles['cover-link']}>
          Snapstore
          <img src={blueArrow} alt="arrow" className="w-4 py-3" />
        </p>
      </Link>
    </div>
  );
}

export default function Product({ img }) {
  return (
    <div
      className={styles['product-container']}
    >
      <img className={styles['product-img']} alt="product" src={img} />
      <div className={styles['product-content']}>
        <Cover />
      </div>
    </div>
  );
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
};
