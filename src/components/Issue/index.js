import React from 'react';

import { Card, Head, ExternalLink } from './styles';

const Issue = () => (
  <Card>
    <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" />
    <Head>
      <strong>Weird animation on going weird animation on going </strong>
      <small>caiopires</small>
      <ExternalLink>
        <a href="github.com" target="_blank">
          <i className="fa fa-external-link" /> ABRIR ISSUE
        </a>
      </ExternalLink>
    </Head>
  </Card>
);

export default Issue;
