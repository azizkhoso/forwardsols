import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';

import Row from '../shared/Row';
import Col from '../shared/Col';

export default function Contact() {
  return (
    <div className="w-full h-full p-5 xl:pt-16">
      <Row className="flex-col h-full px-1 pt-16 pb-3 text-white lg:items-start md:px-16 lg:flex-row">
        <Col xs="12" lg="8" className="h-full p-4 bg-gray-800 lg:p-6">
          <h1 className="text-3xl font-extrabold">
            Hire a dedicated developer!
          </h1>
          <p className="text-base">
            The dedicated developers at Forward Solutions work as your
            extended team to create custom software solutions to promote
            your interests in the digital realm. Our dedicated developers
            have specified technical domains and you can engage their
            expert services to overcome your digital challenges.
            Whether you need app development services (iOS, Windows, Android, Cross-Platform),
            web development (UX/ UI, PHP, Joomla, Python, Ruby), or
            e-commerce development services (Magento) etc.
            You can choose the right skill set of the expert
            programmer without risking incompetency.
          </p>
          <ul className="pl-5 font-bold list-disc">
            <li>Hire a Graphic Designer (PS,AI,XD,CD)</li>
            <li>Hire a Front-end Developer(HTML,CSS,JS,JQ,BS WordPress,Angular,Reactjs)</li>
            <li>Hire a Server/Business Logic Developer (PHP, LARAVEL, PYTHON, DJANGO, NODEJS)</li>
            <li>Hire a Database Administrator (ORACLE, Firebase, MONGODB, MYSQL)</li>
            <li>Hire a Deployment Operator</li>
          </ul>
        </Col>
        <Col xs="12" lg="4" className="p-4 bg-gray-900 lg:p-6 h-5/6">
          <h1 className="text-3xl font-extrabold">
            Delivering a step forward solutions, services, and
            support to the clients around the globe!
          </h1>
          <form className="flex flex-col gap-3 my-3">
            <span className="flex w-full h-6">
              <span className="flex items-center justify-center h-full px-2 py-1 bg-gray-500">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input className="flex-grow h-full px-2 py-1 bg-gray-600 border-0" type="text" required placeholder="Your name" />
              <span className="h-full px-2 py-1 text-lg bg-gray-600 text-primary">*</span>
            </span>
            <span className="flex w-full h-6">
              <span className="flex items-center justify-center h-full px-2 py-1 bg-gray-500">
                <FontAwesomeIcon icon={faAt} />
              </span>
              <input className="flex-grow h-full px-2 py-1 bg-gray-600 border-0" type="email" required placeholder="Your email" />
              <span className="h-full px-2 py-1 text-lg bg-gray-600 text-primary">*</span>
            </span>
            <textarea type="text" className="w-full px-2 py-1 bg-gray-600 border-0" placeholder="Message" />
            <button type="submit" className="self-center px-4 py-1 text-sm uppercase w-fit bg-primary">Send</button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
