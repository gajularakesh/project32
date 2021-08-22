import React ,{useState, useContext }from 'react'
// import Payment from './Payment'
import  { FaHotel,FaRupeeSign,FaStar,FaTrain,FaTimesCircle ,FaMoneyCheckAlt} from 'react-icons/fa'
import DatePicker from "react-datepicker";
import './Hotelname.css'
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../Context/AuthContext';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function getDifferenceInDays(date1,date2){
    console.log(date1,date2);
    const diffInMs = Math.abs(date2-date1);
    return diffInMs/(1000*60*60*24);
}


export default function Hotelname(props) {   
    const history = useHistory();
    const {users,isAuthenticated}  = useContext(AuthContext);
    const list = props.list;
    const [Amount, setAmount] = useState(0);
    const price = list.message.price-(list.message.price*15)/100;
    console.log(list,Amount);
    const [details, setDetails] = useState({
        hotelID: list.message._id,
        userID: users._id,
        Indate: '',
        Outdate: '',
        Rooms: 1,
        Amount:price,
        PaymentID:list.message.hotelname+'12345',
        PaymentStatus: true
      });
      const handleChange = e => {
        let n = getDifferenceInDays(details.Indate,details.Outdate);
        const { name, value } = e.target;
        console.log([name],value);
        setDetails({
          ...details,
          Rooms:value,
          Amount: ((price*details.Rooms)*n>1?n:1)-(n>1?n*100:0)
        });
        console.log(details);
      };
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    const handleBooking=()=>{
        if(!isAuthenticated){
            console.log('your not logged in');
            history.push("/login")
        }
        else{
            let n = getDifferenceInDays(details.Indate,details.Outdate);
            setDetails({
                Amount: ((price*details.Rooms)*n>1?n:1)-(n>1?n*100:0)
            });
            sleep(3000);
            console.log(details);
           const  data = fetch('/Booking/Book', {
                method : 'post',
                body: JSON.stringify(details),
                headers:{
                    'Content-Type' : 'application/json'
                }
            }).then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                 else
                    return {message:{msgBody: "Fail to Book", msgError: true}}}
            ) 
            console.log(data);
        }
        
    }
    

    return (
        <div>
                <div id="name">
                    {/* <div id="data"> */}
                    <div className="bookdis">
                    <h1 id="head"> <span><FaHotel/> </span> {list.message.hotelname}</h1>
                    <h3 id="address">{list.message.hoteladdress}</h3>
                    <h3 id="points">Safe and Sanitized |Couples Allowed | Family | Officials | More Comfortable</h3>
                    <h1 id="rup">Description</h1>
                    <h2 id="s1">Location</h2>
                    <h4 id="s11">{list.message.hoteladdress}</h4>
                     <h2 id="s1">Spacial Features</h2>
                    <h4 id="s11">The property adorns well-designed rooms.
                     They are nicely done with wooden flooring and appealing wooden 
                    accents.The furniture here is appealing. The entire property is modern and tasteful.</h4>
                    
                     <h2 id="s1">Amenities</h2>
                    <h4 id="s11">All the rooms have queen-sized beds and TVs while some rooms also have an AC.
                     Guests can access free internet here.
                     The property also provides CCTV security and power backup to its guests.</h4>
                     <h2 id="s1">What's Nearby</h2>
                    <h4 id="s11">The Shim Tur, Exotic Rooftop Restaurant, Sam's Restaurant and 
                    Bar, and Tadka 4986 can be tried for good food.</h4>

                                        
                    </div>
                    <div id="rat">
                         <b>4.5</b> <FaStar/>
                         <h6 id="address">231 ratings</h6>
                    </div>
                  
                    {/* </div> */}
                    {/*FIXED ..... FORM */}
                    <div id="fixed">
                    <div id="marq"> 
                        <marquee> <b> **Sanitized Stays</b> </marquee>
                    </div>
                    <div id="rup"> 
                        < FaRupeeSign/><b id="rupee">{price} </b> < FaRupeeSign/><del><small>{list.message.price}</small></del> <b id="rupe">15% off</b>
                        <h3 id="address"> inclusive of all taxes</h3>
                    </div>
                    <div id="marq"> 
                        <h2> <b>Stay With us Now</b> </h2>
                    </div>
                    <div className="bookdate">
                    <b>Check-in : </b>
                    <DatePicker
                     //name = "Indate"
                     selected={details.Indate}
                     value={details.Indate}
                     onChange={date=>setDetails({
                        ...details,
                        Indate: date
                      })}
                     minDate={new Date()}
                     isClearable
                     showMonthDropdown/>
                     <br/>
                     <br/>
                     <br/>
                    <b>Check-out : </b>
                    <DatePicker
                     name = "Outdate"
                    selected={details.Outdate}
                     value={details.Outdate}
                     onChange={date=>setDetails({
                        ...details,
                        Outdate: date
                      })}
                     minDate={details.Indate}
                     isClearable
                     showMonthDropdown
                     />
                     </div>
                     <br/>
                     <br/>
                     {/* onSubmit={<Payment/>} */}
                     <form className="bookform">
                    <div>
                     <label className="booklabel"><b> Days:</b></label>
                     {/* <input id="init"
                     type="number"
                     min="1"
                     placeholder="No.of Days"
                     onChange={e=>setDay(e.target.value)}
                     value={Days} className="bookinput"
                      /> */}
                      <span><b>{getDifferenceInDays(details.Indate,details.Outdate)>0?getDifferenceInDays(details.Indate,details.Outdate):1}</b></span>
                    </div>
                     <br/>
                     <br/>
                    <div>
                     <label className="booklabel"><b> Rooms :</b></label>
                     <input id="init"   
                     name="Rooms"
                     type="number"
                     min="1"
                     placeholder="No.of Rooms"
                     onChange={handleChange}
                     value={details.Rooms} className="bookinput"/>
                     </div>
                     <br/>
                     <div id="rup">
                     <h3 id="price">Price for 1 Room for 1 Day     
                        &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  
                         <FaRupeeSign/>{price}</h3>
                        <h3 id="price">Price for {details.Rooms} Rooms for {getDifferenceInDays(details.Indate,details.Outdate)} Days      
                         
                        &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp; 
                        &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp;&nbsp; &nbsp;&nbsp; 
                        <FaRupeeSign/>{((price*details.Rooms)*(getDifferenceInDays(details.Indate,details.Outdate)>1?getDifferenceInDays(details.Indate,details.Outdate):1))}</h3>
                        <h3 id="price">Drop price  &nbsp;&nbsp;  &nbsp;&nbsp;
                          
                        &nbsp;&nbsp;   &nbsp;&nbsp;   
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp; <FaRupeeSign/>{(getDifferenceInDays(details.Indate,details.Outdate)>1?getDifferenceInDays(details.Indate,details.Outdate)*100:0)}</h3>
                        <h3 id="price">Total Amount &nbsp;&nbsp;  &nbsp;&nbsp;
                          
                        
                        <FaRupeeSign/></h3><input value={ (price*details.Rooms)*(getDifferenceInDays(details.Indate,details.Outdate)>1?getDifferenceInDays(details.Indate,details.Outdate):1)-(getDifferenceInDays(details.Indate,details.Outdate)>1?getDifferenceInDays(details.Indate,details.Outdate)*100:0)}/>
                        <div id="pay">
                                <button type="submit" id="btn" className="bookbtn" onClick={handleBooking}>Book Now</button>
                                <br></br>
                                <br></br>
                                <h3> <a id="cancel" href="#">Cancellation <FaTimesCircle/> </a></h3>
                                <h3 id="cancel" > On Cancellation 100% payment Back <FaMoneyCheckAlt/></h3>
                        </div>
                     </div>
                     </form>
                    </div>
                     {/*FIXED END ..... FORM */}
                </div>
            
        </div>
    )
}
