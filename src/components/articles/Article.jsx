import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <>
    <h3>{title}</h3>
    <p>{author}</p>
    <p>{description}</p>
  </>
);

//title author description
Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
