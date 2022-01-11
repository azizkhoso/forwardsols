/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Row({
  children, className, classes, style,
}) {
  return (
    <div className={`flex flex-row w-full${className && ` ${className}`}${classes.root && ` ${classes.root}`}`} style={style}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  children: [<></>],
  className: '',
  classes: {
    root: '',
  },
  style: {},
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  style: PropTypes.object,
};
