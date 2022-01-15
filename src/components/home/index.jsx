import React from 'react';

import styles from './home.module.css';

import frontendDevelopment from '../../assets/frontendDevelopment.jpg';
import digitalMarketing from '../../assets/digitalMarketing.jpg';
import ai from '../../assets/ai.jpg';
import whiteArrow from '../../assets/white-arrow.svg';

export default function Home() {
  const slides = [
    {
      img: frontendDevelopment,
      title: 'Amazing frontends',
      text: 'Explore our amazing frontend web app services.',
      link: '/services',
    },
    {
      img: digitalMarketing,
      title: 'Market digitaly with us',
      text: 'We provide SEO, SEM, Email Marketing and many more.',
      link: '/services',
    },
    {
      img: ai,
      title: 'Aritificial Intelligence',
      text: 'Automate your business with AI',
      link: '/services',
    },
  ];
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 5000);
  }, [count]);
  return (
    <>
      <div className="flex-grow" />
      <div className="absolute flex-grow w-full h-full bg-black">
        <div className="relative flex items-stretch w-full h-full overflow-hidden justify-items-stretch">
          {
            slides.map((slide, idx) => (
              <div
                className="absolute flex flex-col w-screen h-full text-white"
                style={{
                  transitionProperty: 'left',
                  left: `calc((${idx} * 100vw) - (${count % slides.length} * 100vw))`,
                  transitionDuration: '1300ms',
                  transitionTimingFunction: 'ease-in-out',
                  backgroundImage: `url(${slide.img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <div
                  className={`relative flex flex-col w-5/12 mx-auto font-semibold text-white transition-opacity delay-2100 top-1/2 duration-1600 opacity-${(count % slides.length) === idx ? '100' : '0'}`}
                >
                  <h1 className="text-5xl font-bold">{slide.title}</h1>
                  <p className="text-lg text-primary">{slide.text}</p>
                  <span className="relative z-20 flex items-center justify-between p-3 border border-white rounded-md w-60">
                    <span>Explore</span>
                    <span className="absolute inset-0 z-20 flex items-center duration-700 ease-in-out cursor-pointer transition-right hover:-right-6">
                      <img src={whiteArrow} alt="right arrow" className="w-8 h-4 ml-auto mr-8" />
                    </span>
                  </span>
                </div>
              </div>
            ))
          }
          <div className={`${styles.cover} absolute inset-0 w-full h-full`} />
        </div>
      </div>
    </>
  );
}
