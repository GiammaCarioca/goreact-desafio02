import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Issue, Head, ExternalLink } from './styles';

const Issues = ({ issues }) => (
  <Fragment>
    {/** [0, 1, 2... 29] */}
    {/** issuesList: [[{}, {}, {}, {}]] */}
    {issues.map(issue => (
      <Issue key={issue.id}>
        <img src={issue.avatar_url} alt={issue.user.login} />
        <Head>
          <strong>{issue.title} </strong>
          <small>{issue.user.login}</small>
          <ExternalLink>
            <a href={issue.html_url} target="_blank">
              <i className="fa fa-external-link" /> ABRIR ISSUE
            </a>
          </ExternalLink>
        </Head>
      </Issue>
    ))}
  </Fragment>
);

export default Issues;

/** RepoView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
}; */
