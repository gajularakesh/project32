import React, {createContext, useState, useEffect} from 'react';
import AuthService from '../Services/AuthService';
import BookingService from '../Services/BookingService'
import buffer from '../components/buffer.gif'
export const AuthContext = createContext();

export default ({ children }) =>{
    const [users,setUsers] = useState("anil");
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);
    const [list, setlist] = useState("anil")
    const [alert, setalert] = useState(true);
    // const [message, setmessage] = useState(null);
    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUsers(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
            // console.log(users);
        });
    },[]);
    
    // useEffect(()=>{
    //     BookingService.Book(users._id).then(data=>{
    //         const Booking = data.Booking
    //         setlist(Booking);
    //         console.log(data);
    //     });
    // },[users]);

    return(
        <div>
             {!isLoaded?<img src={buffer} alt="Loading"></img> : 
            <AuthContext.Provider value={{users,setUsers,isAuthenticated,setIsAuthenticated, isLoaded,list, alert,setalert}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}
