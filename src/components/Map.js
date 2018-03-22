import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './MapContainer'

class MyMap extends Component {
  render() {
    return (
      <div>
       <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUT6K3CoT7YidAEiFwXzTwtlhVhUdAvhc',
})(MyMap)