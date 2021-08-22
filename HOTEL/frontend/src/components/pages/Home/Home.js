import React, { useState } from 'react'
import './Search.css'
import { Card } from './Card'
import './Home.css'
//import { Search } from './Search';
import HotelService from '../../../Services/HotelService';
import Slideshow from '../Hotel/Slide';
import buffer from '../../buffer.gif'
//import { listeners } from '../../../../../ModelsDB/Booking';
// import { AuthContext } from '../../../Context/AuthContext';
export const Home = () => {
    // const {isLoaded}  = useContext(AuthContext);
    const [list, setlist] = useState(null)
    const[search,setsearch] = useState(null)
    const[work,setWork]=useState(null);
    if(list==null){
        HotelService.home().then(data=>{
            setlist(data.Hotels);
            setWork(data.Hotels);
            console.log(list);
            });
        }
    console.log(list);
    const url1 = "https://media.radissonhotels.net/image/country-inn-and-suites-brand/exteriorview/16256-118839-f64451367_3xl.jpg?impolicy=Card";
    const url2 = "http://hotelnalanda.co.in/images/slider/hotel-entry.jpg";
    const url3 = "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1401367653/Domestic%20Hotels/Hotels_Pune/Royal%20Orchid%20Golden%20Suite/Overview.jpg";
    const url4 = "https://cache.marriott.com/marriottassets/marriott/BOMSA/bomsa-exterior-0023-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" 
   
    if(list!=null)
    if(work!=null){
    const filterData = value=>{
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            setWork(list);
        }
        else
        {
            const filteredData=list.filter(item=>{
            return Object.keys(item).some(key =>{
                return item[key].toString().toLowerCase().includes(lowerCaseValue); 
            })    
            });
            setWork(filteredData);
        }
        console.log(work);
    }
    const handleChange = value =>{
        setsearch(value);
        filterData(value);
    }
    return(
        <div>
            <div className="search-bar">
                {/* <Search></Search> */}
                <div className="form-search">
                    <form className="search">
                        <input type="text" placeholder="Search.." name="search" onChange={e=>handleChange(e.target.value)}></input>
                        {/* <button type="submit" onClick={handleChange}><i className="fa fa-search"></i></button> */}
                    </form>
                </div>
            </div>
            <div className="Homeslide">
                <Slideshow url1={url2} url2={url3} url3={url1} url4={url4}/>
            </div>
            <div class="scroll-left">
                <p><b>**Extra 15% discount on all hotels</b> <a href="/">T&C applied</a> </p>
            </div>
            <div className="homecard">
                <Card lists={work}/>
            </div>
        </div>
    );}
    else{
        return(<img src={buffer} alt="loading"></img>);
    }
    else{
        return(<img src={buffer} alt="loading"></img>);
    }

}