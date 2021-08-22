import React,{ useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext';
export const Profile=()=>{
    const {users}  = useContext(AuthContext);
    return (
        <div>
            <p>{users.username}</p>
            <p>{users.phone}</p>
        </div>
    )
}
