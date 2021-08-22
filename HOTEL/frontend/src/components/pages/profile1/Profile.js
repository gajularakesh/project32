import React,{ useContext,useState } from 'react'
import { AuthContext } from '../../../Context/AuthContext';
import  user from './Profile.module.css'
import { Redirect } from 'react-router';
import buffer from '../../buffer.gif'


export function Profile() {
    const {users}  = useContext(AuthContext);
    const [click, setclick] = useState(false)
    const [clicks, setclicks] = useState(false)

    if(click){
        if(users){
            return <Redirect to={`/Bookings/${users._id}`} />
        }
    }
    if(clicks){
        if(users){
            return <Redirect to={`user/update/${users._id}`} />
        }
    }
    if(users!=null){
        console.log(users);
        return (
                <>
                <div id={user.div1}>
                    <div id={user.div2}>
                    <img className={user.proimg}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jwSQgCkm6QMwHg1uHfJ5DGG1bNZWiI-8kA&usqp=CAU"
                    alt="profile" />
                    </div>
                    <div id={user.div12}>
                        <div className={user.text}>
                            <button onClick={()=>setclicks(true)}>Edit Profile</button>
                            <h5>{users.username}</h5>
                            <p>{users.email}</p>
                            <p>{users.phone}</p>
                            <p>{users._id}</p>
                            {/* <p>00 Bookings</p> */}
                        </div>
                    </div>
                       <div>
                            <button onClick={()=>setclick(true)}>Your Bookings</button>
                        </div>
                </div>
                </>
        );
    }
        
        else{
            return(<img src={buffer} alt="loading"></img>);
        }
    }

