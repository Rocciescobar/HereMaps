import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat:-12.0869336, lng: -77.0523753}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      
      const image ='https://user-images.githubusercontent.com/32284212/37753349-77b909ee-2d6a-11e8-9520-03f677d49bf6.png';
      const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
        position: {lat: -12.0869336, lng:-77.0523753 }, // sets position of marker to specified location
        map: this.map, // sets markers to appear on the map we just created on line 35
        title: location.name, // the title of the marker is set to the name of the location
        icon: image
      });
    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100vw', 
      height: '55vh' 
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}