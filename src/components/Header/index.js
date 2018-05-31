import React from 'react';

import { Container, Repo, FilterStatus } from './styles';

const Header = () => (
  <Container>
    <Repo />
    <FilterStatus type="submit">
      <option>Todas</option>
      <option>Abertas</option>
      <option>Fechadas</option>
    </FilterStatus>
  </Container>
);

export default Header;
