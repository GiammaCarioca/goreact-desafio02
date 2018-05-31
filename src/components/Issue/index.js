import React, { Fragment } from 'react';

import { Container, Repo, ExternalLink } from './styles';

const Issue = () => (
  <Fragment>
    <Container>
      <Repo>
        <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" />
        <div>
          <strong>Problem problem problem problem problem problem problem problem</strong>
          <small>user</small>
          <ExternalLink>
            <a href="github.com" target="_blank">
              <i className="fa fa-external-link" /> ABRIR ISSUE
            </a>
          </ExternalLink>
        </div>
      </Repo>
    </Container>
  </Fragment>
);

export default Issue;
