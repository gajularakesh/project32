import React,{useState } from 'react'
// import BookingService from '../../../Services/BookingService'
import  user from '../profile1/Profile.module.css'

export function Check({match}) {
    const { params: { hotelId },} = match;
    const [list, setlist] = useState(null)
    console.log("came");
    if(list==null){
       const data = fetch(`/Booking/hotel/${hotelId}`)
                .then(res => {console.log(res); return (res.json());})
                .then(data => {console.log(data); setlist(data.Hotel); return data});
                const lists = data.Hotel
    }
    if(list!=null){
        // const lists = list.Hotels;
        console.log(list);
        const listItems = list.map((l) =>{
            console.log(l);
        return (
                <tr className={user.trbook}><td className={user.tdbook}>{l.userID[0].username}</td><td className={user.tdbook}>{l.Indate}</td><td className={user.tdbook}>{l.Outdate}</td><td className={user.tdbook}>{l.Rooms}</td><td className={user.tdbook}>{l.Amount}</td><td className={user.tdbook} className={user.statusbook}>{l.PaymentStatus?"Success":"Fail"}</td><td className={user.tdbook}>{l.PaymentID}</td></tr>
        );
    });
    return(
        <div>
        <h5>{list[0].hotelID}</h5>
        <div className={user.tablediv}>
        <table  className={user.tablebook}><tr className={user.trbook}><th className={user.thbook}>Customer</th><th className={user.thbook}>checkIn</th><th className={user.thbook}>checkOut</th><th className={user.thbook}>Rooms</th><th className={user.thbook}>Amount</th><th className={user.thbook}>PaymenyID</th><th className={user.thbook}>PaymentStatus</th></tr>{listItems}</table>
        </div>
        </div>
    );
    }
    else{
        return(<p>loading</p>)
    }
}
