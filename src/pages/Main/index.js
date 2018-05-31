import React, { Fragment, Component } from 'react';

import api from '../../services/api';

import { Container, Sidebar, Search, Form, RepoView, Board } from './styles';

import Repo from '../../components/Repo';
import Header from '../../components/Header';
import Issue from '../../components/Issue';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
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
            <Repo repositories={this.state.repositories} />
          </RepoView>
        </Sidebar>
        <Fragment>
          <Header />
          <Board>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
            <li>
              <Issue />
            </li>
          </Board>
        </Fragment>
      </Container>
    );
  }
}
