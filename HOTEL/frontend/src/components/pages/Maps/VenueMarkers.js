import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
// import {VenueLocationIcon} from './VenueLocationIcon';
//import MarkerPopup from './MarkerPopup';
import L from 'leaflet';
export const VenueLocationIcon = L.icon({
  iconUrl: require('../assets/venue_location_icon.svg'),
  iconRetinaUrl: require('../assets/venue_location_icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
const VenueMarkers = (props) => {
  //const { venues } = props.venues;
  const lat = props.lat;
  const lan = props.lan;
  console.log(props.lat, props.lan);
  // const position = [18.9075381858911, 77.92039779304226]
  const position = [lat,lan];
  // const markers = venues.map((venue, index) => (
  //   <Marker key={index} position={position}>
  //     <MarkerPopup data={venue}/>
  //   </Marker>
  // ));
  return <Fragment><Marker position={position}>
  {/* <MarkerPopup data={venue}/> */}
</Marker></Fragment>
};

export default VenueMarkers;
