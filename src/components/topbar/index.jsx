import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Container from '../shared/Container';
import Row from '../shared/Row';
// import Col from '../shared/Col';

import forwardsols from '../../assets/forwardsols.png';

export default function Topbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const pages = [
    {
      title: 'Cloud Memberships',
      link: '/cloud-memberships',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'Advisors',
      link: '/advisors',
    },
  ];
  return (
    <>
      <div className="absolute inset-x-0 z-40 text-base text-white">
        <Container className="max-w-screen-xl px-5 py-3 mt-3 xl:mt-9">
          <Row className="items-center justify-between gap-1">
            <img src={forwardsols} alt="forward solutions logo" className="w-48 h-auto" />
            <ul className="flex gap-12 list-none">
              {
                pages.map((page) => (
                  <li key={page.title} className="hidden hover:text-primary md:block">
                    <Link to={page.link}>{page.title}</Link>
                  </li>
                ))
              }
              <li className="flex flex-col gap-1.5 p-2 cursor-pointer" aria-hidden onClick={() => setMenuOpen(!isMenuOpen)}>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                  <span className="w-1 h-1 bg-white rounded-full" />
                  <span className="w-1 h-1 bg-white rounded-full" />
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                  <span className="w-1 h-1 bg-white rounded-full" />
                </div>
              </li>
            </ul>
          </Row>
        </Container>
        <div className={`absolute inset-y-0 z-30 ${isMenuOpen ? 'w-screen' : 'w-0'} h-screen bg-black transition-width ease-in-out delay-0 duration-800 overflow-hidden`} style={{ right: 0 }}>
          <Container className={`${isMenuOpen ? 'block' : 'block'} max-w-screen-xl px-5 py-3 xl:mt-9 mt-3`}>
            <Row className="items-center justify-between gap-1">
              <img src={forwardsols} alt="forward solutions logo" className="w-48 h-auto" />
              <div className="flex flex-col gap-0.5 p-2 cursor-pointer" aria-hidden onClick={() => setMenuOpen(!isMenuOpen)}>
                <div className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                </div>
                <div className="flex self-center justify-center">
                  <span className="w-1 h-1 bg-white rounded-full" />
                </div>
                <div className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                  <span className="w-1 h-1 rounded-full bg-primary border-primary" />
                </div>
              </div>
            </Row>
            <Row className="absolute inset-x-0 z-50 flex-col w-full gap-4 top-1/4">
              <Row className="flex-col flex-wrap items-center justify-center gap-6 md:flex-row">
                {
                  pages.map((page, index) => (
                    <span key={page.title}>
                      <Link to={page.link} className="relative ease-in-out duration-1300 hover:text-primary" style={{ right: isMenuOpen ? 0 : -100 + index * -30, transitionProperty: 'right' }}>{page.title}</Link>
                    </span>
                  ))
                }
              </Row>
              <Row className="items-center justify-center font-bold">
                +1 (844) 984-3444
              </Row>
              <Row className="items-end justify-center gap-2">
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 cursor-pointer hover:text-white" />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 cursor-pointer hover:text-white" />
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
