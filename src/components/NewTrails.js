import React from 'react';

const NewTrails = () => (
  <div>
    <div className="">
      <div className="container mt-3"> 
      <img className="img-trail" src="../../assets/mountains.svg" alt="mountains"/>
       <span className="text-uppercase font-weight-bold ml-2 text-aqua">Descubre nuevas rutas</span>
        <div className=" row">
          <div className="col-sm-10 my-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Ruta Castillo de Chancay</h5>
                <p className="card-text">El Castillo de Chancay es un palacio ubicado en la ciudad de Chancay, provincia de Huaral, en el departamento de Lima</p>
                <a href="#" className="btn btn-secondary">Ver Ruta</a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 my-2">
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
    </div>
  </div>
)
export default NewTrails