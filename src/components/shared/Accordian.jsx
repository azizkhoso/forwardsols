import React from 'react';
import PropTypes from 'prop-types';

export default function Accordian({
  summary, details, className, classes,
  openedIcon, closedIcon,
}) {
  const [isOpen, setOpen] = React.useState(false);
  React.useRef(() => setOpen(false), []);
  return (
    <div className={`flex flex-col w-full${className ? ` ${className}` : ''}${classes.root ? ` ${classes.root}` : ''}`}>
      <div className={`${classes.summary && `${classes.summary} `}flex`} aria-hidden onClick={() => setOpen(!isOpen)}>
        <p className="cursor-pointer w-fit">{summary}</p>
        {
          isOpen
            ? <span>{openedIcon}</span>
            : <span>{closedIcon}</span>
        }
      </div>
      {
        isOpen && (
          <div className={`${!isOpen ? 'h-0' : 'h-auto'}${classes.details ? ` ${classes.details}` : ''} pl-3`}>
            {details}
          </div>
        )
      }
    </div>
  );
}

Accordian.defaultProps = {
  summary: '',
  details: '',
  className: '',
  classes: {
    root: '',
    summary: '',
    item: '',
  },
  openedIcon: <></>,
  closedIcon: <></>,
};

Accordian.propTypes = {
  summary: PropTypes.string,
  details: PropTypes.node,
  openedIcon: PropTypes.node,
  closedIcon: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    summary: PropTypes.string,
    details: PropTypes.string,
  }),
};
