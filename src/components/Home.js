import React from 'react';

const Home = () => (
  <div className="mt-7">
    <form className="">
      <div className="col-auto">
        <label className="sr-only">Username</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-search"></i></div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Encuentra lugares" />
        </div>
      </div>
    </form>
    <div className="col-auto">
      <p>Te encuentras en: </p>
      <p>Aquí va el nombre del lugar donde te encuentras.</p>
    </div>
    <div className="mapRoute vh-40 bg-dark">aqui el mapa</div>
    <div className="d-flex justify-content-center my-3">
      <button type="button" className="btn btn-dark"><i className="fas fa-circle text-danger"></i> Grabar ruta</button>
    </div>
  </div>
)
export default Home