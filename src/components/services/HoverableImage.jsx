/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function HoverableImage({ style, ...others }) {
  const [isHover, setHover] = React.useState(false);
  return (
    <img
      {...others}
      style={{
        ...style,
        filter: `${isHover ? 'grayscale(0%)' : 'grayscale(100%)'}`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

HoverableImage.defaultProps = {
  style: {},
};

HoverableImage.propTypes = {
  style: PropTypes.object,
};
