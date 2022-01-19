import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Row from '../shared/Row';

import forwardsols from '../../assets/forwardsols.png';
import Message from '../Message';

export default function Topbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const pages = [
    {
      title: 'Portfolio',
      link: '/portfolio',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Let\'s Connect',
      link: '/contact',
    },
    {
      title: 'Executives',
      link: '/executives',
    },
  ];
  function handleLogoClick() {
    setMenuOpen(false);
    navigate('/');
  }
  return (
    <>
      <div className="absolute inset-x-0 z-30 text-base text-white">
        <div className="flex px-5 py-3 mx-1 mt-3 md:mx-16 xl:mt-9">
          <Row className="items-center justify-between gap-1">
            <div onClick={() => handleLogoClick()} role="link" tabIndex="0" onKeyPress={() => handleLogoClick()}>
              <img src={forwardsols} alt="forward solutions logo" className="w-48 h-auto cursor-pointer" />
            </div>
            <ul className="flex gap-12 list-none">
              {
                pathname === '/' ? pages.slice(0, 4).map((page) => (
                  <li key={page.title} className={`hidden ${page.link === '/contact' ? 'text-primary' : 'hover:text-primary'} md:block`}>
                    <Link to={page.link}>{page.title}</Link>
                  </li>
                ))
                  : (
                    <li key={pathname} className="hidden text-white md:block">
                      <p>{pages.find((p) => p.link === pathname)?.title}</p>
                    </li>
                  )
              }
              <li className="flex flex-col gap-1.5 px-2 py-1 cursor-pointer" aria-hidden onClick={() => setMenuOpen(!isMenuOpen)}>
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
        </div>
        <div className={`absolute inset-y-0 z-20 ${isMenuOpen ? 'w-screen' : 'w-0'} h-screen bg-black transition-width ease-in-out delay-0 duration-800 overflow-hidden`} style={{ right: 0 }}>
          <div className={`${isMenuOpen ? 'block' : 'block'} flex mx-1 md:mx-16 px-5 py-3 xl:mt-9 mt-3`}>
            <Row className="items-center justify-between gap-1">
              <div onClick={() => handleLogoClick()} role="link" tabIndex="0" onKeyPress={() => navigate('/')}>
                <img src={forwardsols} alt="forward solutions logo" className="w-48 h-auto cursor-pointer" />
              </div>
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
            <Row className="absolute inset-x-0 z-20 flex-col w-full gap-4 top-1/4">
              <Row className="flex-col flex-wrap items-center justify-center gap-6 text-xl md:flex-row">
                {
                  pages.map((page, index) => (
                    <span key={page.title} role="button" onKeyPress={() => setMenuOpen(false)} tabIndex={1 + index} onClick={() => setMenuOpen(false)}>
                      <Link to={page.link} className="relative ease-in-out duration-1300 hover:text-primary" style={{ right: isMenuOpen ? 0 : -100 + index * -30, transitionProperty: 'right' }}>{page.title}</Link>
                    </span>
                  ))
                }
              </Row>
              <Row className="items-center justify-center font-bold">
                (+92) 321 8444938
              </Row>
              <Row className="items-end justify-center gap-2">
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 cursor-pointer hover:text-white" />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 cursor-pointer hover:text-white" />
              </Row>
            </Row>
          </div>
          <Message />
        </div>
      </div>
    </>
  );
}
