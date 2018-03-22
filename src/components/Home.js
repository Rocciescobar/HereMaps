import React, { Component } from 'react';
import Search from './Search';
import Route from './Route';
import MyMap from './Map'

class Home extends Component {
  render() {

    return (
      <div>
        <Search />
        <MyMap/>
        <Route />
      </div>
    )
  }
}

export default Home