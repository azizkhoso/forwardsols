import React from 'react';

import { Link, useLocation, Navigate } from 'react-router-dom';

import Row from '../shared/Row';
import Product from './Product';

export default function Portfolio() {
  const { search } = useLocation();
  if (!search) return <Navigate replace to="?type=web-development" />;
  const menus = [
    { title: 'Web', link: '?type=web-development' },
    { title: 'AI', link: '?type=ai' },
    { title: 'UI/UX', link: '?type=ui/ux' },
    { title: 'Mobile', link: '?type=mobile' },
    { title: 'E-Commerce', link: '?type=e-commerce' },
  ];
  const products = [
    { title: 'Music App', type: 'mobile', link: '/music-app' },
    { title: 'Grade My Faculty', type: 'web-development', link: '/grade-my-faculty' },
    { title: 'Snap Store', type: 'web-development', link: '/snap-store' },
    { title: 'Snap Store', type: 'web-development', link: '/snap-store' },
  ];
  return (
    <div className="flex-grow w-full p-5 xl:pt-16">
      <Row className="flex-col h-full gap-6 px-1 pt-16 pb-3 text-white md:px-16">
        <ul className="flex flex-wrap justify-center w-full gap-5 px-3 list-none md:gap-9 lg:justify-end">
          {
            menus.map((m) => (
              <li className={`font-extrabold uppercase ${search === m.link && 'text-primary'}`}><Link to={m.link}>{m.title}</Link></li>
            ))
          }
        </ul>
        <div className="grid w-full h-full grid-cols-1 gap-1 pt-5 md:grid-cols-2 lg:grid-cols-3" style={{ gridTemplateColums: 'repeat(auto-fill, 250px)', gridTemplateRows: 'repeat(auto-fill, 324px)' }}>
          {
            products.map((p) => (
              <Product title={p.title} />
            ))
          }
        </div>
      </Row>
    </div>
  );
}
