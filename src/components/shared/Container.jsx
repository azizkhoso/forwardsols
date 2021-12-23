import React from 'react';
import PropTypes from 'prop-types';

export default function Container({
  children, className, classes,
}) {
  return (
    <div className={`container mx-auto${className && ` ${className}`}${classes.root && ` ${classes.root}`}`}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  children: [<></>],
  className: '',
  classes: {
    root: '',
  },
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};
