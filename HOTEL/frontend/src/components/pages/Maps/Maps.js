import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import logo from '../assets/venue_location_icon.svg';
import MapView from './MapView';
import './Maps.css'
export function Maps(){
  return (
    <div >
      <MapView/>
      {/* <img src={logo} alt="logo" /> */}
    </div>
      
  )
}

