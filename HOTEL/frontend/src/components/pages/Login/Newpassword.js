import React, { useContext, useState, useEffect } from 'react'
//import useFormLog from './useFormLog'
import classes from '../Form.module.css'
import { AuthContext } from '../../../Context/AuthContext'
import { DataContext } from '../../../Context/DataContext';
import {Link,useHistory, useParams} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
// import Message from './Message';


const Newpassword = (props) => {
   // console.log(message,click);
   const history = useHistory()

    const {isAuthenticated}  = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    const dataContext = useContext(DataContext);
    const [password,setPassword] = useState("");
    const {token} = useParams()
    if(isAuthenticated) {
        return <Redirect to='/' />
    }
    const PostData = ()=>{
        //console.log("clicked....");
        fetch('/user/newpassword',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
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
                 <label htmlFor="password" 
                 className={classes.formlabel}>
                     New-password
                 </label>
                 <input
                     id="password"
                     type="password" 
                     name="password" 
                     className={classes.forminput}
                     placeholder="new password"
                     value = {password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                   {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            
            <p className={classes.forminputbtn}
            type="submit" onClick={()=>PostData()}>
                Update-Password
            </p>
        </form>
    </div>
    );
}

export default Newpassword;
