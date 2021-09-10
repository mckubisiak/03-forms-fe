import React, { Component } from 'react';

export default class NewContainer extends Component {
  state = {
    loading: true,
    articles: []
  }

  render() {
    return <p>Time for the News</p>;
  }
}
