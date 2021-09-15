import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchWord, onChange, submit }) => {
  return (
    <>
      <input
        aria-label="keyword search"
        type="text"
        name="searchWord"
        value={searchWord}
        onChange={onChange}
      />

      <button aria-label="submit" onClick={submit}>Search the news!</button>
    </>
  );
};

Search.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Search;
