import React from 'react';

const UserRoutesItem = ({ place, sport, level }) => (
  <div className="col-12 col-sm-6 my-2">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{place}</h5>
        <p className="card-text">{sport}</p>
        <p className="card-text">{level}</p>
      </div>
    </div>
  </div>  
)

export default UserRoutesItem