import React, { useContext, useState, useEffect } from 'react'
//import useFormLog from './useFormLog'
import classes from '../Form.module.css'
import { AuthContext } from '../../../Context/AuthContext'
import { DataContext } from '../../../Context/DataContext';
import {Link,useHistory} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
// import Message from './Message';


const Forgot = (props) => {
   // console.log(message,click);
   const history = useHistory()

    const {isAuthenticated}  = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    const dataContext = useContext(DataContext);
    const [email, setmail] = useState("");
    if(isAuthenticated) {
        return <Redirect to='/' />
    }
    const PostData = ()=>{
        //console.log("clicked....");
        fetch('/user/resetpassword',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            const {message} = data;
           if(message.msgError){
            dataContext.setmsg(message);
            //setclick(true);
            authContext.setalert(true);
           }
           else{
            dataContext.setmsg(message);
            //setclick(true);
            authContext.setalert(true);
               history.push('/login')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className={classes.hotelauth}>
        <form className={classes.form}>
            <h1>great to see <b>YOU</b> again</h1>
            <div className={classes.forminputs}>
                 <label htmlFor="email" 
                 className={classes.formlabel}>
                     Mail-ID
                 </label>
                 <input
                     id="mailID"
                     type="text" 
                     name="email" 
                     className={classes.forminput}
                     placeholder="Enter Mail-ID"
                     value = {email}
                     onChange={(e)=>setmail(e.target.value)}
                     />
                   {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            
            <p className={classes.forminputbtn}
            type="submit" onClick={()=>PostData()}>
                Forgot-Password
            </p>
        </form>
    </div>
    );
}

export default Forgot
