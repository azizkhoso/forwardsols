/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import HoverableImage from './HoverableImage';
import HoverButton from './HoverButton';

export default function Service({
  title, content, logos, link,
}) {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      className="flex flex-col w-full gap-6 px-3 text-center lg:w-3/12"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        minHeight: '400px',
      }}
    >
      <h1
        className="text-3xl font-extrabold duration-300"
        style={{
          transform: `${isHover ? 'translate(0, -12px)' : 'translate(0, 125px)'}`,
          transitionProperty: 'transform',
          transitionTimingFunction: 'cubic-bezier(.5,1.64,.41,1)',
        }}
      >
        {title}
      </h1>
      <p
        className="transition-opacity ease-in-out delay-300 duration-900"
        style={{
          opacity: `${isHover ? 0.9 : 0}`,
          visibility: `${isHover ? 'visible' : 'hidden'}`,
        }}
      >
        {content}
      </p>
      <div
        className="flex flex-wrap justify-center gap-5"
      >
        {
          logos.map((logo) => (
            <HoverableImage
              className="w-8 h-8 transition-opacity ease-in-out duration-900"
              src={logo}
              style={{
                opacity: `${isHover ? 0.9 : 0}`,
                transitionDelay: '500ms',
                visibility: `${isHover ? 'visible' : 'hidden'}`,
              }}
            />
          ))
        }
      </div>
      <Link to={link}>
        <HoverButton
          style={{
            opacity: `${isHover ? 0.9 : 0}`,
            transitionDelay: '700ms',
            transitionProperty: 'opacity',
            visibility: `${isHover ? 'visible' : 'hidden'}`,
          }}
        >
          See More
        </HoverButton>
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
