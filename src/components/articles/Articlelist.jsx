import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articlelist = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map(({ title, author, description }) => (
      <li key={`${title}=$`}>
        <Article title={title} author={author} description={description} />
      </li>
    ))}
  </ul>
);
//title author description
Articlelist.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Articlelist;
