import React from 'react';

import { Link } from 'react-router-dom';

import redArrow from '../../assets/red-arrow.svg';

function Cover() {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col w-full h-full gap-1 transition-opacity delay-300 duration-600 p-3 ${isHover ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="w-full text-sm font-bold uppercase">E-Commerce</p>
      <hr className="w-10 h-0.5 border border-primary" />
      <p className="w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Minima maiores, rem esse dicta voluptatibus quod amet nam quidem at,
        reprehenderit quam!
      </p>
      <span className="flex-grow" />
      <Link to="/portfolio/snapstore">
        <p className="flex items-center gap-3 font-extrabold text-md">
          Snapstore
          <img src={redArrow} alt="arrow" className="w-4 py-3" />
        </p>
      </Link>
    </div>
  );
}

export default function Product() {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      className="relative flex justify-center w-full p-0 overflow-hidden text-white transition-all duration-1000 bg-cover border-2 border-black aspect-h-2 aspect-w-3 md:w-1/2 lg:w-1/3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="w-full h-auto" alt="product" src="https://forwardsols.com/wp-content/uploads/2021/03/screencapture-snapstore-pk-2021-03-03-02_20_13.png" />
      <div className={`absolute h-full duration-300 transition-width backdrop-filter backdrop-brightness-20 ${isHover ? 'w-full' : 'w-0'}`}>
        {isHover && <Cover />}
      </div>
    </div>
  );
}
