import React from 'react';
import Search from './Search';
import Route from './Route'

const Home = () => (
  <div className="mt-7">
    <Search />
    <div className="mapRoute vh-40 bg-dark">aqui el mapa</div>
    <Route />
  </div>
)
export default Home