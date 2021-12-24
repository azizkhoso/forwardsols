import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import Row from '../shared/Row';

export default function Footer() {
  return (
    <div className="absolute inset-x-0 w-full mb-3" style={{ bottom: 0 }}>
      <div className="flex items-center px-5 py-3 mx-1 text-white md:mx-16">
        <Row className="justify-between">
          <div className="flex flex-col">
            <span>&copy;2020</span>
            <span className="font-bold">ForwardSols</span>
            <span className="uppercase">Tech Pvt.ltd</span>
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-6 md:flex-row">
            <span className="font-bold">+1 (844) 984-3444</span>
            <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 cursor-pointer hover:text-primary" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 cursor-pointer hover:text-primary" />
            <span className="w-16" />
            <span className="absolute z-50 flex items-center justify-center w-12 h-12 mt-6 rounded-full right-8 md:right-24 bg-primary md:mt-0">
              <FontAwesomeIcon icon={faComment} className="text-xl cursor-pointer" />
            </span>
          </div>
        </Row>
      </div>
    </div>
  );
}
