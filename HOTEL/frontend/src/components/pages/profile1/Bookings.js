import React,{useState } from 'react'
import  user from './Profile.module.css'
import buffer from '../../buffer.gif'


export function Bookings({match}) {
    const { params: { userId },} = match;
    const [list, setlist] = useState()
    console.log("came");
    if(list==null){
       const data = fetch(`/Booking/user/${userId}`)
                .then(res => {console.log(res); return (res.json());})
                .then(data => {console.log(data); setlist(data.user); return data});
    }
    if(list!=null){
        console.log(list);
        const listItems = list.map((l) =>{
            console.log(l);
        return (
                <tr className={user.trbook}><td className={user.tdbook}>{l.hotelID[0].hotelname}</td><td className={user.tdbook}>{l.Indate}</td><td className={user.tdbook}>{l.Outdate}</td><td className={user.tdbook}>{l.Rooms}</td><td className={user.tdbook} className={user.statusbook}>{l.PaymentStatus?"Success":"Fail"}</td><td className={user.tdbook}>{l.PaymentID}</td></tr>
        );
    });
    return(
        <div>
        <h5>Hotels Booked DashBoard</h5>
        <div className={user.tablediv}>
        <table  className={user.tablebook}><tr className={user.trbook}><th className={user.thbook}>hotel</th><th className={user.thbook}>checkIn</th><th className={user.thbook}>checkOut</th><th className={user.thbook}>Rooms</th><th className={user.thbook}>PaymenyStatus</th><th className={user.thbook}>PaymentID</th></tr>{listItems}</table>
        </div>
        </div>
    );
    }
    else{
        return(<img src={buffer} alt="loading"></img>);
    }
}
