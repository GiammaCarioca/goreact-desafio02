import React, { Fragment, Component } from 'react';
import api from '../../services/api';

import Issues from '../../components/Issues';

import {
  Container,
  Sidebar,
  Search,
  Form,
  RepoView,
  Repository,
  Wrapper,
  Header,
  RepositorySelected,
  FilterStatus,
  IssuesView,
  IssuesList,
} from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositoryClicked: false,
    repositorySelected: '',
    filter: '',
    repositoryKey: '',
    repositories: [],
    issues: [],
  };

  handleFilter = async (e) => {
    this.setState({ filter: e.target.value });

    try {
      const response = await api.get(`/repos/${this.state.repositorySelected}/issues?state=${this.state.filter}`);

      this.setState({
        repositoryClicked: true,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleClick = async (e, repository) => {
    e.preventDefault();

    this.setState({ filter: 'all' });

    try {
      const response = await api.get(`/repos/${repository.full_name}/issues?state=${this.state.filter}`);

      this.setState({
        repositoryKey: repository.id,
        repositoryClicked: true,
        repositorySelected: repository.full_name,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
      this.setState({ filter: 'all' });
    }
  };

  render() {
    return (
      <Container>
        <Sidebar>
          <Search>
            <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
              <input
                type="text"
                placeholder="Novo repositório"
                value={this.state.repositoryInput}
                onChange={e => this.setState({ repositoryInput: e.target.value })}
              />
              <button type="submit">
                {this.state.loading ? (
                  <i className="fa fa-spinner fa-pulse" />
                ) : (
                  <i className="fa fa-angle-right" />
                )}
              </button>
            </Form>
          </Search>
          <RepoView>
            {this.state.repositories.map(repository => (
              <Repository key={repository.id} onClick={e => this.handleClick(e, repository)}>
                <Wrapper>
                  <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                  <div>
                    <strong>{repository.name}</strong>
                    <small>{repository.owner.login}</small>
                  </div>
                </Wrapper>
                <button type="submit">
                  <i className="fa fa-angle-right" />
                </button>
              </Repository>
            ))}
          </RepoView>
        </Sidebar>
        <IssuesView>
          <Header>
            <Fragment>
              {this.state.repositories
                .filter(repository => repository.id === this.state.repositoryKey)
                .map(repository => (
                  <RepositorySelected key={repository.id}>
                    <Wrapper>
                      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                      <div>
                        <strong>{repository.name}</strong>
                        <small>{repository.owner.login}</small>
                      </div>
                    </Wrapper>
                  </RepositorySelected>
                ))}
            </Fragment>

            {this.state.repositoryClicked && (
              <FilterStatus type="submit" onChange={this.handleFilter}>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </FilterStatus>
            )}
          </Header>
          {this.state.repositoryClicked && (
            <IssuesList>
              <Issues issues={this.state.issues} />
            </IssuesList>
          )}
        </IssuesView>
      </Container>
    );
  }
}
