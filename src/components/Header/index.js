import React from 'react';

import { Container, Repository, FilterStatus } from './styles';

const Header = () => (
  <Container>
    <Repository />
    <FilterStatus type="submit">
      <option>Todas</option>
      <option>Abertas</option>
      <option>Fechadas</option>
    </FilterStatus>
  </Container>
);

export default Header;

/** RepoView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
}; */
