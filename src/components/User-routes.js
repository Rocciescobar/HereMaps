import React from 'react';
import UserRoutesItem from './User-routes-item';

const UserRoutes = ({routes}) => (
  <div>
    <div className="row">
      <div className="col-auto">
        <h5>Mis Rutas:</h5>
        <hr className="border-aqua"/>
      </div>
    </div>
    <div className="row">
      {routes.map(route => 
        <UserRoutesItem 
          key = {route.place}
          {...route}
        />
      )}
    </div>
  </div>
)

export default UserRoutes