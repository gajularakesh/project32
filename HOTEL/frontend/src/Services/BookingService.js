const BookingService = {
    Bookings : (_id)=>{
        return fetch(`/Booking/${_id}`)
                .then(res => {console.log(res); return (res.json());})
                .then(data => {console.log(data); return data});      
    },
    // hotel : (hotelId)=>{
    //     return fetch(`/hotel/${hotelId}`)
    //             .then(res => {console.log(res); return (res.json());})
    //             .then(data =>data);
    // }
    Book : details=>{
        return fetch('/Booking/Book', {
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
    },
}
export default BookingService;