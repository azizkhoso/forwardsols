import React from 'react';

import Row from '../shared/Row';
import Service from './Service';

import tensorflow from '../../assets/tensorflow.svg';
import kubernetes from '../../assets/kubernetes.svg';
import colab from '../../assets/colab.svg';
import aws from '../../assets/aws.svg';
import keras from '../../assets/keras.svg';
import pytorch from '../../assets/pytorch.svg';

export default function Services() {
  const services = [
    {
      title: 'Aritificial Intelligence',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#ai',
    },
    {
      title: 'Web Development',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#web-development',
    },
    {
      title: 'Digital Marketing',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#digital-marketing',
    },
    {
      title: 'Mobile Application',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#mobile-application',
    },
    {
      title: 'E-Commerce Development',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#e-commerce',
    },
  ];
  return (
    <div className="flex-grow w-full p-5 xl:pt-16">
      <Row className="flex-col h-full gap-6 px-1 pt-16 pb-3 text-white md:px-16">
        <div className="flex flex-col items-start justify-center w-full h-full gap-1 pt-72 lg:pt-5 lg:flex-wrap lg:flex-row lg:gap-9">
          {
            services.map((s) => (
              <Service title={s.title} content={s.content} logos={s.logos} link={s.link} />
            ))
          }
        </div>
      </Row>
    </div>
  );
}
