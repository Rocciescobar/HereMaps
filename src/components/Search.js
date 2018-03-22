import React from 'react';

const Search = () => (
  <div>
    <form className="my-3">
      <div className="col-auto col-sm-6 offset-sm-3">
        <label className="sr-only">Username</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-search"></i></div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Encuentra lugares" />
        </div>
      </div>
    </form>
  </div>
)

export default Search