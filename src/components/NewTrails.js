import React from 'react';

const NewTrails = () => (
  <div>
    <div className="vh-80">
      <div className="container"> 
      <img className="img-trail" src="mountains.svg" alt="mountains"/>
       <span className="text-uppercase font-weight-bold ml-2 text-aqua">Descubre nuevas rutas</span>

        <div className=" row">
          <div className="col-sm-10 my-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Ruta Origen-Destino</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-secondary">Ver Ruta</a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 my-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Ruta Origen-Destino</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-secondary">Ver Ruta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default NewTrails