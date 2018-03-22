import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { 
      const {google} = this.props; 
      const maps = google.maps; 

      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center: { lat: -12.145141, lng:-77.021886 },
        zoom: 17,
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig); 
      
      const image ='https://user-images.githubusercontent.com/32284212/37753349-77b909ee-2d6a-11e8-9520-03f677d49bf6.png';
      const marker = new google.maps.Marker({ 
        position: { lat: -12.145141, lng:-77.021886 }, 
        map: this.map, 
        title: location.name, 
        icon: image
      });
    }
  }

  render() {
    const style = { 
      width: '100vw', 
      height: '55vh' 
    }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}