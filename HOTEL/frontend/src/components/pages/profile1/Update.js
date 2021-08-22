import React, { useState } from 'react'
//import useFormLog from './useFormLog'
import classes from '../Form.module.css'
// import { AuthContext } from '../../../Context/AuthContext'
//import { Redirect } from 'react-router-dom';
// import Message from './Message';
import { useHistory } from 'react-router-dom';



export const Update = ({match}) => {
    const history = useHistory();
    const { params: { userId },} = match;
    const [update, setupdate] = useState({username:'',phone:''});
    const [click, setclick] = useState(false)
    if(click){
        console.log(update);
        const data = fetch(`user/update/${userId}`,{
            method : 'post',
            body: JSON.stringify(update),
            headers:{
                'Content-Type' : 'application/json'
            }
            }).then(res => {console.log(res); return (res.json());})
              .then(data => data);
        //<Redirect to='/Profile' />
        history.push("/Profile")
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setupdate({
          ...update,
          [name]: value
        });
       console.log(update);
      };
    return (
       <div className={classes.hotelauth}>
           <form className={classes.form}>
               <div className={classes.forminputs}>
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        username
                    </label>
                    <input
                        id="username"
                        type="text" 
                        name="username" 
                        className={classes.forminput}
                        placeholder="Username"
                        value = {update.username}
                        onChange={handleChange}
                        />
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="text" 
                        name="phone" 
                        className={classes.forminput}
                        placeholder="PhoneNumber"
                        value = {update.phone}
                        onChange={handleChange}
                        />
                      {/* {errors.email && <p>{errors.email}</p>} */}
               </div>
               <button className={classes.forminputbtn}
               type="submit" onClick={()=>setclick(true)}>
                   Update
               </button>

           </form>
       </div>
    );
}

// export default Manager;
