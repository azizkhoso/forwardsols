import React from 'react';

import bars from '../../assets/bars.png';
import ceo from '../../assets/ceo.jpg';

export default function About() {
  return (
    <div className="flex-grow w-full p-5 xl:pt-16">
      <div className="flex flex-col h-full gap-6 px-1 pt-24 pb-3 text-white md:pt-16 md:px-16">
        <p className="w-full text-2xl font-extrabold text-center text-primary">Forward Solutions</p>
        <p className="w-full mx-auto text-center md:w-3/4 lg:w-2/3">
          At Forward we are aware that creating client-oriented software takes
          an amalgam of technical excellenceand clear communication that&apos;s why
          our firm hires only the very best to ensure you to receive both.
          As we know that every client is unique , we strive to deliver an individual,
          innovative and affordable proposal every time and  follow it through
          an outstanding delivery which is both on time and within budget.
        </p>
        <div className="flex flex-wrap items-center justify-center w-full mx-auto mt-4 lg:w-2/3">
          <img src={bars} alt="bars" className="w-full h-auto max-w-full md:w-3/12" style={{ maxHeight: '80%' }} />
          <p className="w-full md:w-8/12">
            <span className="text-2xl text-primary">Development Experts</span>
            <br />
            <hr className="w-24 my-5 border-2 border-primary" />
            The dedicated developers at Forward Solutions work as your extended
            team to create custom software solutions to promote your interests in
            the digital realm. Our dedicated developers have specified technical
            domains and you can engage their expert services to overcome your
            digital challenges. Whether you need app development services (iOS,
            Windows, Android, Cross-Platform), web development (UX/ UI, PHP, Python,
            Angular,Reactjs,Nodejs), or e-commerce development services (Magento) etc.
            You can choose the right skill set of the expert programmer without
            risking incompetency.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-3 mx-auto mt-4 lg:w-2/3">
          <p className="w-full">
            <img src={ceo} alt="bars" className="mx-auto rounded-full w-36" />
            <span className="block w-full text-2xl font-bold text-center text-primary">CEO Message</span>
            Forward Solutions was established in February 2018 and is enjoying a very
            positive reputation across our business.
            <br />
            I believe technology should serve its users by solving problems or achieving
            strategic goals and everything we do supports this belief. Our user centric,
            people first practices extend across all we do from the way we become our clients&apos;
            trusted partner to our semi-annual performance reviews that put a high emphasis
            on individual growth.
            <br />
            Our reputation influences so many aspects of our company - the way our customers
            feel about our products and services; how regulators perceive us; and whether employees
            find Forward Solutions a satisfying place to work. Therefore, it is important for
            all of us to protect our reputation through a strong culture of integrity and
            ethical conduct.
            <br />
            Achievement, performance and success, all lead towards and start from a simple point
            - appreciation from the people around you.
          </p>
        </div>
      </div>
    </div>
  );
}
