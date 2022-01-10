import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import forwardsols from '../assets/forwardsols.png';

import Row from './shared/Row';

export default function Message() {
  const [isOpenHelp, setOpenHelp] = React.useState(false);
  return (
    <div className="fixed flex items-center justify-center w-12 h-12 bg-transparent bottom-8 right-8 md:right-20" style={{ zIndex: 100 }}>
      {
        isOpenHelp && (
          <div className="absolute right-0 z-50 pt-2 mb-40 text-black rounded-lg bg-primary" style={{ width: 290 }}>
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
        style={{ zIndex: 100 }}
        className="relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-primary hover:bg-primaryHover"
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
  );
}
