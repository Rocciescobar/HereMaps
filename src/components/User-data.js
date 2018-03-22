import React from 'react';

const UserData = ({user}) => (
  <div className="row my-3">
    <div className="col-4 col-sm-2">
      <img className="img-fluid" src={user.url} alt="usuario"/>
    </div>
    <div className="col-8 col-sm-10">
      <h3>{user.name}</h3>
      <p>{user.register}</p>   
    </div>    
  </div>
)

export default UserData