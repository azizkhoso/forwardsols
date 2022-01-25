import React from 'react';
import { Link } from 'react-router-dom';

import blueArrow from '../../assets/blue-arrow.svg';
import tensorflow from '../../assets/tensorflow.svg';
import colab from '../../assets/colab.svg';
import aws from '../../assets/aws.svg';
import keras from '../../assets/keras.svg';

export default function ProductDescription() {
  return (
    <div className="flex-grow w-full p-5 xl:pt-16">
      <div className="flex flex-col h-full gap-1 px-1 pt-16 pb-3 text-white md:flex-row md:px-16">
        <div className="flex flex-col order-2 w-full md:order-1 md:w-1/2">
          <Link to="/portfolio">
            <div className="flex gap-3 text-sm font-medium">
              <img src={blueArrow} alt="red arrow" className="w-4 transform rotate-180" />
              <p>Back to Portfolio</p>
            </div>
          </Link>
          <div className="w-full mt-6">
            <p className="w-full text-3xl font-extrabold">Snap Store</p>
            <p className="w-full text-xs font-semibold uppercase text-primary">Web app</p>
          </div>
          <div className="w-full mt-6">
            <p className="w-full text-sm font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, explicabo. Aperiam ad minima voluptas laboriosam. Cupiditate non id velit explicabo placeat dolore voluptate</p>
            <ul className="pl-3 mt-4 text-gray-400 list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>dorem amet</li>
              <li>dolor sit</li>
              <li>amet consectetur</li>
            </ul>
          </div>
          <div className="w-full mt-6">
            <p className="w-full text-sm font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, explicabo. Aperiam ad minima voluptas laboriosam. Cupiditate non id velit explicabo placeat dolore voluptate</p>
            <ul className="pl-3 mt-4 text-gray-400 list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>dorem amet</li>
              <li>dolor sit</li>
              <li>amet consectetur</li>
            </ul>
          </div>
          <div className="w-full mt-6">
            <p className="w-full mt-4 text-sm font-bold text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, explicabo. Aperiam ad minima voluptas laboriosam. Cupiditate non id velit explicabo placeat dolore voluptate</p>
            <div className="flex w-full gap-2 mt-4">
              {
                [tensorflow, colab, keras, aws].map((item) => (
                  <img src={item} alt="tech" className="w-7" />
                ))
              }
            </div>
          </div>
          <span className="flex-grow" />
          <div className="w-full mt-9">
            <div className="flex items-center justify-between w-full gap-2 p-2 bg-gray-700 mt-9">
              <div>
                <Link to="/portfolio/shoe-shop">
                  <p className="font-bold text-md">Shoe Shop</p>
                  <div className="flex gap-2 text-xs text-gray-100 uppercase" style={{ fontSize: '9px' }}>
                    <img src={blueArrow} alt="red arrow" className="w-4 transform rotate-180" />
                    <p>Previous work</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/portfolio/music-app">
                  <p className="font-bold text-right text-md">Music App</p>
                  <div className="flex gap-2 text-gray-100 uppercase" style={{ fontSize: '9px' }}>
                    <p>Next work</p>
                    <img src={blueArrow} alt="red arrow" className="w-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col order-1 w-full md:w-1/2 md:order-2">
          <img src="https://forwardsols.com/wp-content/uploads/2021/03/Artboard.png" alt="music-app" className="pb-0 aspect-h-2 aspect-w-3" />
        </div>
      </div>
    </div>
  );
}
