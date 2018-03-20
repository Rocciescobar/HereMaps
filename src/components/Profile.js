import React from 'react';

const Profile = () => (
  <div className="container mt-7">
    <div className="row my-3">
      <div className="col-4">
        <img className="img-fluid" src="https://user-images.githubusercontent.com/32296142/37617229-801944a0-2b80-11e8-9a04-2646a54ff368.png" alt="usuario"/>
      </div>
      <div className="col-8 d-flex align-items-center">
        <h3>Usuario</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-auto">
        <h5>Mis Rutas:</h5>
        <hr className="border-aqua"/>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>            
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>            
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>            
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Profile