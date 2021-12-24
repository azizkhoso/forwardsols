import React from 'react';
import styles from './home.module.css';

import frontendDevelopment from '../../assets/frontendDevelopment.jpg';
import digitalMarketing from '../../assets/digitalMarketing.jpg';
import ai from '../../assets/ai.jpg';

export default function Home() {
  const a = '';
  const slides = [
    {
      img: frontendDevelopment,
      content: (
        <div className="flex flex-col self-start font-semibold text-white w-60">
          <h1 className="text-2xl font-bold">Amazing Frontends</h1>
          <p className="text-lg text-primary">Explore our amazing frontend web app services.</p>
          <span className="border-2 border-white rounded-md">
            Explore --=
          </span>
        </div>
      ),
    },
    {
      img: digitalMarketing,
      content: <p className="self-end font-semibold text-white">About digitalMarketing</p>,
    },
    {
      img: ai,
      content: <p className="self-center font-semibold text-white">About ai</p>,
    },
  ];
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      console.log({ count });
      let c = count;
      c += 1;
      if (c === slides.length) c = 0;
      setCount(() => c);
    }, 60000);
  }, []);
  return (
    <>
      <div
        className={`absolute inset-0 h-full py-3 bg-no-repeat bg-cover xl:pt-9 transistion-bgImg duration-700 ease-in-out w-full ${a}`}
        style={{ backgroundImage: `url(${slides[count].img})` }}
      >
        <div className="flex flex-col justify-center w-full h-full px-2 py-40 md:px-24">
          {slides[count].content}
        </div>
      </div>
      <div className={`${styles.cover} z-10 absolute inset-0 w-full h-full`} />
    </>
  );
}
