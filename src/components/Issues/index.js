import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Issue, Head, ExternalLink } from './styles';

const Issues = ({ issues }) => (
  <Fragment>
    {issues.map(issue => (
      <Issue key={issue.id}>
        <img src={issue.user.avatar_url} alt={issue.user.login} />
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

Issues.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  })).isRequired,
};
