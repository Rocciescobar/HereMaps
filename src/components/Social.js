import React from 'react';

const Social = () => (
  <div>
    <div className="container vh-80">
      <div className="row p-3 my-3 mx-2 border border-secondary rounded">
        <div className="col-md-4"><a><i className="fab fa-facebook-square text-aqua fa-lg mr-1"></i>compartir con whatsapp</a></div>
      </div>
      <div className="row p-3 my-3 mx-2 border border-secondary rounded">
        <div className="col-md-4"><a><i className="fab fa-twitter-square text-aqua fa-lg mr-1"></i>compartir con facebook</a></div>
      </div>
      <div className="row p-3 my-3 mx-2  border border-secondary rounded">
        <div className="col-md-4"><a><i className="fab fa-whatsapp-square text-aqua fa-lg mr-1"></i>compartir con twitter</a></div>
      </div>
    </div>
  </div>
)
export default Social