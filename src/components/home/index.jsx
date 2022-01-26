import React from 'react';

import styles from './home.module.css';

import frontendDevelopment from '../../assets/frontendDevelopment.png';
import digitalMarketing from '../../assets/digitalMarketing.jpg';
import mobileapp from '../../assets/mobileapp.jpg';
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
      img: mobileapp,
      title: 'Attractive Apps',
      text: 'Have a look on attractive mobile app services.',
      link: '/services',
    },
    {
      img: digitalMarketing,
      title: 'Market Digitally',
      text: 'We provide SEO, SEM, Email Marketing and many more.',
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
      <div className={styles['home-content']}>
        <div className={styles['slides-container']}>
          {
            slides.map((slide, idx) => (
              <div
                key={slide.title}
                className={styles.slide}
                style={{
                  left: `calc((${idx} * 100vw) - (${count % slides.length} * 100vw))`,
                  // backgroundImage: `url(${slide.img})`,
                }}
              >
                <img src={slide.img} alt={slide.title} className="absolute object-cover w-full h-full" />
                <div
                  className={`${styles['slide-content']} opacity-${(count % slides.length) === idx ? '100' : '0'}`}
                >
                  <h1 className="text-5xl font-bold">{slide.title}</h1>
                  <p className="text-lg">{slide.text}</p>
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
          <div className={styles.cover} />
        </div>
      </div>
    </>
  );
}
