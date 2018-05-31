import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Repository, Container } from './styles';

const Repo = ({ repositories }) => (
  <Fragment>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <Container>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </div>
        </Container>
        <button type="submit">
          <i className="fa fa-angle-right" />
        </button>
      </Repository>
    ))}
  </Fragment>
);

Repo.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  })).isRequired,
};

export default Repo;
