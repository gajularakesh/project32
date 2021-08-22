import React,{useState,useContext} from 'react'
import './Card.css'
import {HomeContext}  from '../../../Context/HomeContext';
import { Redirect } from 'react-router';
export function Card(props) {
    const {list,setlist}  = useContext(HomeContext);
    // setlist(null);
    const myLists = props.lists;  
    const [click, setclick] = useState(false)
    if(click){
        if(list){
            return <Redirect to={`/hotel/${list._id}`} />
        }
    }
    const listItems = myLists.map((myList) =>{
        console.log(myList._id)
    return(
    <div className="card-container">
        <div className="float-layout">
            <div className="card-image">
            <img src={myList.url1} alt="avthar"></img>
            <div className="card">
                <div className="card-title">
                    <a href={`/hotel/${myList._id}`}>{myList.hotelname}</a>
                    <span><b>-15%</b></span>
                </div>
                <div className="card-desc">
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper
                    mollis tempus. Mauris eu maximus lectus, eu auctor justo. Aenean porta purus
                    vel commodo consequat. */}
                    {myList.discription}
                    <div className="address">
                    <h6>{myList.hoteladdress}</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper
                    mollis tempus. Mauris eu maximus lectus, eu auctor justo. Aenean porta purus
                    vel commodo consequat.</p>
                    </div>
                </div>
                
                <div className="btn-group">
                    <span><b>{myList.rating}
                    <i className={myList.rating>=1 ? "fa fa-star checked" : "fa fa-star"}></i>
                    <i className={myList.rating>=2 ? "fa fa-star checked" : "fa fa-star"}></i>
                    <i className={myList.rating>=3 ? "fa fa-star checked" : "fa fa-star"}></i>
                    <i className={myList.rating>=4 ? "fa fa-star checked" : "fa fa-star"}></i>
                    <i className={myList.rating>=5 ? "fa fa-star checked" : "fa fa-star"}></i>
                    </b></span>
                    {/* <button className="ratting-btn">5 STAR</button> */}
                    <span className="map-btn"><a  onClick={() => window.location.replace(`/hotel/${myList._id}/#maps`)}><b>map <i className="fa fa-map-marker fa-xs" aria-hidden="true"></i></b></a></span> 
                    <span className="price-btn"><b><i className="fa fa-inr" aria-hidden="true"></i> {myList.price}/-</b></span>
                    <button className="visit-btn" onClick={()=>{setlist(myList); setclick(true);}}><b>visit </b><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>
            </div>
            </div>
        </div>
    </div>
    )});  
    return (
        <div>
            {listItems}
        </div>
    )
}


