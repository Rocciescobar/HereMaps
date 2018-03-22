import React, { Component } from 'react';
import Search from './Search';
import Route from './Route';

class Home extends Component {
  render() {

    return (
      <div>
        <Search />
        <Route />
      </div>
    )
  }
}

export default Home