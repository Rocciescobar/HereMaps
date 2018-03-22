import React from 'react';

const NewTrails = () => (
  <div className="container mb-7">
    <div className=" row mt-3">
      <div className="col-4 col-sm-2">
        <img className="img-fluid img-style" src="../../assets/mountains.svg" alt="mountains"/>
      </div>
      <div className="col-8 col-sm-10 d-flex align-items-center">
        <p className="text-uppercase font-weight-bold text-aqua">Descubre nuevas rutas</p>
      </div>      
    </div>
    <div className="row mt-3">
      <div className="col-12 col-sm-6 my-2">
        <div className="card bg-light">
          <div className="card-body">
            <h5 className="card-title">Ruta Castillo de Chancay</h5>
            <p className="card-text">El Castillo de Chancay es un palacio ubicado en la ciudad de Chancay, provincia de Huaral, en el departamento de Lima</p>
            <a href="#" className="btn btn-secondary">Ver Ruta</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 my-2">
        <div className="card bg-light">
          <div className="card-body">
            <h5 className="card-title">Ruta Lunahuana</h5>
            <p className="card-text">Lunahuaná es una excelente alternativa para admirar la naturaleza, practicar deportes de aventuras y probar comidas inolvidables.</p>
            <a href="#" className="btn btn-secondary">Ver Ruta</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default NewTrails