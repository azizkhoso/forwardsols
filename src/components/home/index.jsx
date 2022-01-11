import React from 'react';

import frontendDevelopment from '../../assets/frontendDevelopment.jpg';
import digitalMarketing from '../../assets/digitalMarketing.jpg';
import ai from '../../assets/ai.jpg';
import whiteArrow from '../../assets/white-arrow.svg';

import styles from './home.module.css';

export default function Home() {
  const [left, setLeft] = React.useState(0);
  const slides = [
    {
      img: frontendDevelopment,
      content: (
        <div className="flex flex-col self-start w-5/12 font-semibold text-white">
          <h1 className="text-5xl font-bold">Amazing Frontends</h1>
          <p className="text-lg text-primary">Explore our amazing frontend web app services.</p>
          <span className="z-20 flex items-center justify-between p-3 border border-white rounded-md w-60" onMouseEnter={() => setLeft(12)} onMouseLeave={() => setLeft(0)}>
            <span>Explore</span>
            <img src={whiteArrow} alt="right arrow" className="relative inset-x-0 z-20 w-8 h-4 duration-700 cursor-pointer -left-8 transition-left" style={{ left }} />
          </span>
        </div>
      ),
    },
    {
      img: digitalMarketing,
      content: (
        <div className="flex flex-col self-end w-5/12 font-semibold text-white">
          <h1 className="text-5xl font-bold">Market digitaly with us</h1>
          <p className="text-lg text-primary">We provide SEO, SEM, Email Marketing and many more.</p>
          <span className="z-20 flex items-center justify-between p-3 border border-white rounded-md w-60" onMouseEnter={() => setLeft(12)} onMouseLeave={() => setLeft(0)}>
            <span>Explore</span>
            <img src={whiteArrow} alt="right arrow" className="relative inset-x-0 z-20 w-8 h-4 duration-700 cursor-pointer -left-8 transition-left" style={{ left }} />
          </span>
        </div>
      ),
    },
    {
      img: ai,
      content: (
        <div className="flex flex-col self-end w-5/12 font-semibold text-white">
          <h1 className="text-5xl font-bold">Aritificial Intelligence</h1>
          <p className="text-lg text-primary">Automate your business with AI.</p>
          <span className="z-20 flex items-center justify-between p-3 border border-white rounded-md w-60" onMouseEnter={() => setLeft(12)} onMouseLeave={() => setLeft(0)}>
            <span>Explore</span>
            <img src={whiteArrow} alt="right arrow" className="relative inset-x-0 z-20 w-8 h-4 duration-700 cursor-pointer -left-8 transition-left" style={{ left }} />
          </span>
        </div>
      ),
    },
  ];
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 10000);
  }, [count]);
  return (
    <>
      {
        slides.map((slide, index) => (
          <div
            className={`absolute inset-0 bottom-0 h-full w-full py-3 duration-700 ease-in-out bg-no-repeat bg-cover xl:pt-9 transition-all ${index === count % slides.length ? 'block left-0' : 'hidden left-1/2'}`}
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-2 py-40 md:px-24">
              {slide.content}
            </div>
          </div>
        ))
      }
      <div className={`${styles.cover} absolute inset-0 w-full h-full`} />
      <div className="flex-grow" />
    </>
  );
}
