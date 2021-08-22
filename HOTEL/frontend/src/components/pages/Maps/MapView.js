import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
      lat : props.cords[0].lattitude,
      lan : props.cords[0].langitude
    }
  }

  render() {
    const { currentLocation, zoom, lat, lan } = this.state;
    // const position = [18.9075381858911, 77.92039779304226]
    console.log(lat,lan);
    const position = [lat,lan];
    return (
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues} lat={lat} lan = {lan}/>
      </MapContainer>
    );
  }
}

// export default MapView;
