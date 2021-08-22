import React, { useContext, useState, useEffect } from 'react'
//import useFormLog from './useFormLog'
import classes from '../Form.module.css'
// import { AuthContext } from '../../../Context/AuthContext'
import { Redirect } from 'react-router-dom';
// import Message from './Message';


export const Manager = (props) => {
    const [ID, setID] = useState({id:''});
    const [click, setclick] = useState(false)
    if(click){
        if(ID.id){
            return <Redirect to={`/check/hotel/${ID.id}`} />
        }
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setID({
          ...ID,
          [name]: value
        });
       console.log(ID);
      };
    return (
       <div className={classes.hotelauth}>
           <form className={classes.form}>
               <h1>great to see <b>YOU</b> again</h1>
               <div className={classes.forminputs}>
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        Hotel Id
                    </label>
                    <input
                        id="hotelID"
                        type="text" 
                        name="id" 
                        className={classes.forminput}
                        placeholder="HotelID"
                        value = {ID.id}
                        onChange={handleChange}
                        />
                      {/* {errors.email && <p>{errors.email}</p>} */}
               </div>
               
               <button className={classes.forminputbtn}
               type="submit" onClick={()=>setclick(true)}>
                   Sign in
               </button>

           </form>
       </div>
    );
}

// export default Manager;
