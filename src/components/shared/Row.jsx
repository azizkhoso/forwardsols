import React from 'react';
import PropTypes from 'prop-types';

export default function Row({
  children, className, classes,
}) {
  return (
    <div className={`flex flex-row w-full${className && ` ${className}`}${classes.root && ` ${classes.root}`}`}>
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
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};
