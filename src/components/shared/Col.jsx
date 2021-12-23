/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function Col(props) {
  const { className, classes, children } = props;
  const {
    xs, sm, md, lg, xl,
  } = props;
  function getWidth() {
    let width = 'w-full';
    if (xs) width += ` w-${xs}/12`;
    if (sm) width += ` sm:w-${sm}/12`;
    if (md) width += ` md:w-${md}/12`;
    if (lg) width += ` lg:w-${lg}/12`;
    if (xl) width += ` xl:w-${xl}/12`;
    if (props['2xl']) width += ` 2xl:w-${props['2xl']}/12`;
    if (!(xs || sm || md || lg || xl || props['2xl'])) width = 'w-full';
    return width;
  }
  return (
    <div className={`${className && `${className} `}${classes.root && `${classes.root} `}${getWidth()}`}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  children: [<></>],
  className: '',
  classes: {
    root: '',
  },
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
};

Col.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  '2xl': PropTypes.string,
};
