import React from 'react';

import { Link, useLocation, Navigate } from 'react-router-dom';

import Row from '../shared/Row';
import Product from './Product';

import mc from '../../assets/mc.jpg';
import smartphone from '../../assets/smartphone-mockup-floating.jpg';

export default function Portfolio() {
  const { search } = useLocation();
  if (!search) return <Navigate replace to="?type=web-development" />;
  const menus = [
    { title: 'Web', link: '?type=web-development' },
    { title: 'DM', link: '?type=digital-marketing' },
    { title: 'UI/UX', link: '?type=ui/ux' },
    { title: 'Mobile', link: '?type=mobile' },
    { title: 'E-Commerce', link: '?type=e-commerce' },
  ];
  const products = [
    {
      title: 'Music App', type: 'mobile', link: '/music-app', img: mc,
    },
    {
      title: 'Grade My Faculty', type: 'web-development', link: '/grade-my-faculty', img: mc,
    },
    {
      title: 'Snap Store', type: 'web-development', link: '/snap-store', img: smartphone,
    },
    {
      title: 'Snap Store', type: 'web-development', link: '/snap-store', img: smartphone,
    },
  ];
  return (
    <div className="flex-grow w-full p-5 xl:pt-16">
      <Row className="flex-col h-full gap-1 px-1 pt-16 pb-3 text-white md:px-16">
        <ul className="flex flex-wrap justify-center w-full gap-5 px-3 text-sm list-none md:gap-9 lg:justify-end">
          {
            menus.map((m) => (
              <li className={`font-extrabold uppercase ${search === m.link && 'text-primary'}`}><Link to={m.link}>{m.title}</Link></li>
            ))
          }
        </ul>
        <div className="relative flex flex-wrap justify-center w-full">
          {
            products.map((p) => (
              <Product key={p.title} title={p.title} img={p.img} />
            ))
          }
        </div>
      </Row>
    </div>
  );
}
