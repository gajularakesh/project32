const HotelService = {
    home : ()=>{
        return fetch('/hotel/')
                .then(res => {console.log(res); return (res.json());})
                .then(data => data);      
    },
    hotel : (hotelId)=>{
        return fetch(`/hotel/${hotelId}`)
                .then(res => {console.log(res); return (res.json());})
                .then(data =>data);
    }
}
export default HotelService;