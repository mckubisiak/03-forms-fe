
import React, { Component } from 'react';
import { fetchNews } from '../../../services/Newsapi';
import Articlelist from '../../articles/Articlelist';
import Search from '../../articles/Search';



export default class NewContainer extends Component {
  state = {
    loading: false,
    articles: [],
    searchWord: 'Search for news here!',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const response = 
    await fetchNews(this.state.searchWord);
    this.setState({ articles: response });
  }

  render() {
    return (
      <>
        <Search
          searchWord={this.state.searchWord}
          onChange={this.handleChange}
          submit={this.handleSubmit}
        />
        <Articlelist articles={this.state.articles}/>
      </>
    );
  }
}
