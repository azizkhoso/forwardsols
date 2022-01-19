/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Service.module.css';

import whiteArrow from '../../assets/white-arrow.svg';

export default function Service({
  title, content, logos, link,
}) {
  return (
    <div
      className={styles.service}
    >
      <h1 className={styles.title}>
        {title}
      </h1>
      <p className={styles.content}>
        {content}
      </p>
      <div className={styles['images-container']}>
        {
          logos.map((logo) => (
            <img
              className={styles.image}
              src={logo}
            />
          ))
        }
      </div>
      <Link to={link}>
        <button
          type="button"
          className={styles['btn-see-more']}
        >
          See More
          <img src={whiteArrow} alt="right arrow" className={styles['white-arrow']} />
        </button>
      </Link>
    </div>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(PropTypes.shape({
    default: PropTypes.string.isRequired,
    hover: PropTypes.string.isRequired,
  })).isRequired,
  link: PropTypes.string.isRequired,
};
