import React, {useState,} from 'react'
import HotelService from '../../../Services/HotelService'
import Slideshow from './Slide';
import './Hotel.css'
import buffer from '../../buffer.gif'
import Hotelname from './Hotelname';
import Features from './Features';
export function Hotel({match}) {
    const [list, setlist] = useState(null)
    const { params: { hotelId },} = match;
        console.log(hotelId);
        const [setIsLoading] = useState(true);
        if(list==null){
            HotelService.hotel(hotelId).then(data=>{
            setlist(data);
            console.log(list);
            // setIsLoading(false);
                })
        }
   if(list!=null){
       console.log(list);
       return(
           <div className="hotelnames">
            <div className="slideshowmain">
              <Slideshow url1={list.message.url1} url2={list.message.url2} url3={list.message.url3} url4={list.message.url4} />
            </div>
           <Hotelname list={list}/>
           <Features list={list}/>
           </div>
        // <div>
        //     {/* <p>{users.username}Hotels</p>
        //     <p>{list.hotelname}Hotels</p> 
        //     {!isLoading && (
        //         <>
        //         <p>Name: {list.message.hotelname}</p>
        //         <img src={list.message.hotelurl} alt="anil" width={300}></img>
        //         </>
        //      )} */}
        //      {/* {!isLoading?<h1>Name: {data}</h1>:load} */}
        //      <div className="slideshowmain">
        //      <Slideshow url1={list.message.hotelurl} url2={"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} url3={list.message.hotelurl} />
        //      </div>
        //      <hr ></hr>
        //      <div className="hotelname">
               
        //         <div className="hotelnamebrand">
        //             <p>{list.message.hotelname}</p>
        //         </div>
        //         <div className="rating">
        //             <span>Rating: {list.message.rating}<i className="fa fa-star checked"></i></span>
        //         </div> 
        //         <div><span className="hotelprice"><i className="fa fa-inr" aria-hidden="true"></i><b>{list.message.price}</b></span></div>
        //      </div>
        //      <hr></hr>
        //      <div><button className="bookbutton" onClick={() => window.location.replace("#book")}>Book Now</button></div>
        //      <center><hr width="90%"></hr></center>
        //      <div className="hoteladdress"><h6>Address: </h6><p>1-33/A, Rayalton Hotel, Kukatpally, Hyderabad</p></div>
        //      <hr></hr>
             
        //      <p className="facilities-heading">Make Your Rooms with Your Specifications</p>
        //      <center><hr className="rule"></hr></center>
        //      <div className="row-hotel">
        //          <table className="facilities-table">
        //              <tr><th>Facilities</th></tr>
        //              <tr><td><i class="fa fa-check" aria-hidden="true"></i> Swimming Pool </td></tr>
        //              <tr><td> <i class="fa fa-check" aria-hidden="true"></i> Free Wifi</td></tr>
        //              <tr><td><i class="fa fa-check" aria-hidden="true"></i> Pets Allowed </td></tr>
        //              <tr><td><i class="fa fa-check" aria-hidden="true"></i>Air Conditioning </td></tr>
        //          </table>
        //          <div className ="facilities-img">
        //          <img  src="https://a0.muscache.com/im/pictures/74f3a58a-d8c7-48b4-85ef-2de9badbfb01.jpg?aki_policy=x_large" alt="image"></img>
        //          </div>
        //      </div>
        //      <div className="discription">
        //          <h6>Discription: </h6>
        //          <p>Injoy Lofts Ipanema is an apartment set in Rio de Janeiro, 700 m from Ipanema Beach. Free WiFi is featured.
        //             The accommodation is equipped with a flat-screen TV with cable channels. There is also a kitchenette, fitted with a microwave, cooktop and fridge. The apartment also has a private bathroom with free toiletries. Bed linen is provided.
        //             The nearest airport is Santos Dumont Airport, 8 km from Injoy Lofts Ipanema. This is our guests' favourite part of Rio de Janeiro, according to independent reviews. Couples particularly like the location — they rated it 9.3 for a two-person trip. We speak your language!</p>
        //      </div>
        //      <br></br>
        //      <h6>Fill This</h6>
        //      <center><hr className="rule"></hr></center>
        //      <div id="book">
        //          <div className="date">
        //              <label className="datelabel">In-Date</label>
        //             <input type="date"></input>
        //          </div>
        //          <div className="date" >
        //             <label className="datelabel">Out-Date</label>
        //             <input type="date"></input>
        //          </div>
                 
        //      </div>
        // </div>
       )
    
   }
   else{
    return(<img src={buffer} alt="loading"></img>);
}

}
