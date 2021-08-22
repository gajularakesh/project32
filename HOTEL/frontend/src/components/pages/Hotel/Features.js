import React from 'react'
import  {FaCreditCard,FaTaxi,FaTv,FaCarBattery,FaCamera,FaWifi,FaWpforms,FaCar,FaMapMarkerAlt} from 'react-icons/fa'
import MapView from '../Maps/MapView'
import './Hotelname.css'

export default function Features(props) {
    const cords = [{
        lattitude : props.list.message.lattitude,
        langitude : props.list.message.langitude,
    }]
    console.log(cords);
    return (
        <div>
            <br></br>
            <br></br>
            <h2 id="s1"> Amenties</h2>
            <div id="comp3">
            <div id="extra"> 
                <div>Tv &nbsp;<FaTv/></div>
                <div> Wifi &nbsp;<FaWifi/></div>
                <div  >Power Backup&nbsp;<FaCarBattery/>  </div>
                <div>Taxi Avalible&nbsp;<FaTaxi/></div>
                <div>CCTV Camaras&nbsp;<FaCamera/></div>
                <div>AC&nbsp;<FaWpforms/></div>
                <div>Parking&nbsp;<FaCar/></div>
                <div>Card Payment&nbsp;<FaCreditCard/></div>
            </div>
            <br/>
            <br/>
        <div id="map">
        <h1 id="s1">Map</h1>
        {/* <h2>SPOT ON Swatha Reddy Residency <FaMapMarkerAlt/></h2> */}
        <MapView id = "maps"cords={cords}/>
        </div>
            </div>
        </div>
    )
}
