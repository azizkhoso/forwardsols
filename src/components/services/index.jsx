import React from 'react';
import styles from './Services.module.css';

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
      title: 'E-Commerce',
      content: 'Ai content here the lksjf lsdjf kjsdlfj ljsdflj lsjf kjlfj lsdjfdj lldjf lsdjfldsjfl jsldfls lsjflsdjfl jslfjls jflsdfj',
      logos: [tensorflow, kubernetes, colab, aws, keras, pytorch],
      link: '/portfolio#e-commerce',
    },
  ];
  return (
    <div className="page-container">
      <Row className="page-content">
        <div className={styles['services-container']}>
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
