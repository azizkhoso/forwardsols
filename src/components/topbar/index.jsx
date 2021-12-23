import React from 'react';

import {
  Link,
} from 'react-router-dom';

import Container from '../shared/Container';
import Row from '../shared/Row';
import Accordian from '../shared/Accordian';

export default function Topbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const mobileMenus = [
    {
      summary: 'For Institutions',
      details: 'Inst',
    },
    {
      summary: 'For Consultants',
      details: 'Cons',
    },
    {
      summary: 'For Students',
      details: 'Stds',
    },
    {
      summary: 'For Governments',
      details: 'Inst',
    },
    {
      summary: 'High Scools',
      details: 'schools',
    },
    {
      summary: 'Events',
      details: 'events',
    },
  ];
  return (
    <>
      <div className="relative inset-x-0 text-xs text-white bg-primary">
        <Container className="max-w-screen-xl px-5 py-3">
          <Row className="flex-col items-center gap-2 md:flex-row">
            <p className="self-end font-semibold uppercase cursor-pointer" aria-hidden onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              Menu
            </p>
            {
              isMobileMenuOpen && mobileMenus.map((menu) => (
                <Accordian
                  summary={menu.summary}
                  details={menu.details}
                  classes={{ summary: 'gap-3' }}
                />
              ))
            }
            <Row className="flex-col items-center justify-between gap-3 md:flex-row">
              <p className="text-sm cursor-pointer hover:text-yellow-400">
                Click here for&nbsp;
                <span className="font-bold uppercase">Global Education News</span>
              </p>
              <ul className="flex gap-2 uppercase list-none">
                {
                  ['home', 'about', 'testimonials', 'contact', 'social'].map((item) => (
                    <li className="hover:text-yellow-400" key={item}>
                      <Link to={`/${item}`}>{item}</Link>
                    </li>
                  ))
                }
              </ul>
            </Row>
          </Row>
        </Container>
      </div>
      <header className="relative inset-x-0">
        <div className="w-1/2">Hello there</div>
      </header>
    </>
  );
}
