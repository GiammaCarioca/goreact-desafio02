/**
 * repo: https://api.github.com/repositories/80149262
 * todas: https://api.github.com/repos/facebook/react/issues?state=all
 * open: https://api.github.com/repos/facebook/react/issues?state=open
 * closed: https://api.github.com/repos/facebook/react/issues?state=closed
 */

import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Issues from '../../components/Issues';

import {
  Container,
  Sidebar,
  Search,
  Form,
  RepoView,
  Repository,
  Wrapper,
  IssuesView,
  IssuesList,
} from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    repositoryClicked: false,
    issues: [],
  };

  handleClick = async (e, repository) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${repository.full_name}/issues?state=all`);

      this.setState({
        repositoryClicked: true,
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
              // início do repository
              <Repository
                key={repository.id}
                withIssues={repository.has_issues}
                onClick={e => this.handleClick(e, repository)}
              >
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
              // fim do repository
            ))}
          </RepoView>
        </Sidebar>
        <IssuesView>
          <Header />
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
