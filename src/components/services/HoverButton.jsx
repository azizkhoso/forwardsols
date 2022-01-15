/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import whiteArrow from '../../assets/white-arrow.svg';

export default function HoverButton({ style, ...others }) {
  const [isHover, setHover] = React.useState(false);
  return (
    <button
      {...others}
      style={{ ...style, boxShadow: `${isHover ? '0 0 10px rgb(240, 91, 114)' : ''}` }}
      className={`flex items-center justify-between gap-3 p-3 w-44 rounded-lg border ${isHover ? 'bg-primary border-primary' : 'bg-transparent border-white'} text-white text-md ${others.className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {others.children}
      <img
        src={whiteArrow}
        alt="right arrow"
        className="w-8 h-4"
        style={{
          transitionProperty: 'transform',
          transform: isHover ? 'translate(10px, 0px)' : 'translate(-10px, 0px)',
          transitionDuration: '700ms',
        }}
      />
    </button>
  );
}

HoverButton.defaultProps = {
  style: {},
};

HoverButton.propTypes = {
  style: PropTypes.object,
};
