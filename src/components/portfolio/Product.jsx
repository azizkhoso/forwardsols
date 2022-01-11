import React from 'react';

function Cover() {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col w-full h-full gap-1 transition-opacity delay-300 duration-600 p-3 ${isHover ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="w-full text-sm font-light uppercase">E-Commerce</p>
      <hr className="w-10 h-0.5 border border-primary" />
      <p className="w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Minima maiores, rem esse dicta voluptatibus quod amet nam quidem at,
        reprehenderit quam!
      </p>
    </div>
  );
}

export default function Product() {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      className="relative flex items-center justify-center w-full h-full m-auto overflow-hidden text-white bg-cover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="w-full" alt="product" src="https://forwardsols.com/wp-content/uploads/2021/03/screencapture-snapstore-pk-2021-03-03-02_20_13.png" />
      <div className={`absolute inset-0 h-full duration-300 transition-width backdrop-filter backdrop-brightness-50 ${isHover ? 'w-full' : 'w-0'}`}>
        {isHover && <Cover />}
      </div>
    </div>
  );
}
