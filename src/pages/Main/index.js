import React, { Component, Fragment } from 'react';
import Issues from '../../components/Issues';
import api from '../../services/api';
import {
  Container,
  FilterStatus,
  Form,
  Header,
  IssuesList,
  IssuesView,
  LineSeparation,
  Repository,
  RepositorySelected,
  RepoView,
  Search,
  Sidebar,
  Wrapper,
} from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    currentRepoName: '',
    currentRepoKey: '',
    issues: [],
    showIssues: false,
    value: 'all',
  };

  handleSelect = async (e) => {
    e.preventDefault();
    await this.setState({ value: e.target.value });

    try {
      const response = await api.get(`/repos/${this.state.currentRepoName}/issues?state=${this.state.value}`);

      this.setState({
        showIssues: true,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleClick = async (e, repository) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${repository.full_name}/issues`);

      this.setState({
        currentRepoKey: repository.id,
        showIssues: true,
        currentRepoName: repository.full_name,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
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
                  <i className="fa fa-plus-circle" />
                )}
              </button>
            </Form>
            <LineSeparation />
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
                .filter(repository => repository.id === this.state.currentRepoKey)
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

            {this.state.showIssues && (
              <FilterStatus value={this.state.value} onChange={this.handleSelect}>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </FilterStatus>
            )}
          </Header>
          <IssuesList>
            <Issues issues={this.state.issues} />
          </IssuesList>
        </IssuesView>
      </Container>
    );
  }
}
