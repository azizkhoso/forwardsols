import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Row from '../shared/Row';
// import Message from '../Message';

export default function Footer() {
  return (
    <>
      <div className="relative flex-grow" />
      <div id="footer" className="relative bottom-0 w-full mt-6 bg-transparent md:mt-0">
        <div className="flex items-center px-6 pt-3 pb-5 mx-1 text-white md:mx-16">
          <Row className="justify-between">
            <div className="flex flex-col">
              <span>&copy;2021</span>
              <span className="font-bold">ForwardSols</span>
              <span className="uppercase">Tech Pvt.ltd</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-6 md:flex-row">
              <span className="font-bold">(+92) 321 8444938</span>
              <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 cursor-pointer hover:text-primary" />
              <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 cursor-pointer hover:text-primary" />
              <span className="w-10" />
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}
