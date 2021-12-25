import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import Row from '../shared/Row';

import forwardsols from '../../assets/forwardsols.png';

export default function Footer() {
  const [isOpenHelp, setOpenHelp] = React.useState(false);
  return (
    <div className="absolute inset-x-0 w-full mb-3" style={{ bottom: 0 }}>
      <div className="flex items-center px-5 py-3 mx-1 text-white md:mx-16">
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
            <span className="w-16" />
            {
              isOpenHelp && (
                <div className="absolute z-50 pt-2 mb-40 text-black rounded-lg bg-primary" style={{ width: 290 }}>
                  <div className="flex flex-col gap-1 px-4 py-2 bg-white rounded-b-lg">
                    <Row className="max-h-6">
                      <span className="relative inset-x-0 flex items-center justify-center w-16 h-16 bg-black border-2 border-white rounded-full -top-10">
                        <img src={forwardsols} alt="forward sols logo" className="w-12" />
                      </span>
                      <p className="text-xs font-light text-gray-500">Forward Solutions</p>
                    </Row>
                    <p className="text-xs">How can we help? We are here for you!</p>
                    <Row className="items-center p-1 border rounded">
                      <input className="w-full h-6 text-xs border-0" type="text" placeholder="Reply to Forward Sols" />
                      <FontAwesomeIcon icon={faSmile} className="cursor-pointer" />
                    </Row>
                  </div>
                </div>
              )
            }
            <span
              onClick={() => setOpenHelp(!isOpenHelp)}
              aria-hidden
              className="absolute z-50 flex items-center justify-center w-12 h-12 mt-6 rounded-full cursor-pointer right-8 md:right-24 bg-primary hover:bg-primaryHover md:mt-0"
            >
              {
                isOpenHelp
                  ? (
                    <FontAwesomeIcon icon={faTimes} className="text-3xl cursor-pointer" />
                  )
                  : (
                    <FontAwesomeIcon icon={faComment} className="text-xl cursor-pointer" />
                  )
              }
            </span>
          </div>
        </Row>
      </div>
    </div>
  );
}
