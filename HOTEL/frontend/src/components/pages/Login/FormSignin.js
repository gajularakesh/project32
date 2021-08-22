import React, { useContext, useState, useEffect } from 'react'
import useFormLog from './useFormLog'
import classes from '../Form.module.css'
import { AuthContext } from '../../../Context/AuthContext'
import { Redirect } from 'react-router-dom';
// import Message from './Message';


const FormSignin = (props) => {
    const{handleChange, user, handleSubmit, errors, message, click,setclick} = useFormLog(props);
    useEffect(() => {
        setclick(false);
       }, []);   
    
    console.log(message,click);
    const {isAuthenticated}  = useContext(AuthContext);
    if(isAuthenticated) {
       // props.history.goBack
        return <Redirect to='/' />
    }

    return (
       <div className={classes.formcontentright}>
           <form className={classes.form} onSubmit={handleSubmit}>
               <h1>great to see <b>YOU</b> again</h1>
               <div className={classes.forminputs}>
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="username" 
                        className={classes.forminput}
                        placeholder="enter your mailid"
                        value = {user.username}
                        onChange={handleChange}
                        />
                      {errors.email && <p>{errors.email}</p>}
               </div>
               <div className={classes.forminputs}>
                    <label htmlFor="password" 
                    className={classes.formlabel}>
                        Password
                    </label>
                    <input
                        id="password"
                        type="password" 
                        name="password" 
                        className={classes.forminput}
                        placeholder="enter password"
                        value = {user.password}
                        onChange={handleChange}
                        />
                         {errors.password && <p>{errors.password}</p>}
               </div>
               <button className={classes.forminputbtn}
               type="submit">
                   Sign in
               </button>
               <span className={classes.formforgot}>
                   <a href="/forgot">forgot password</a>
               </span>
               <span className={classes.forminputlogin}>
                   don't have an account? Register <a href="/register">here</a>
               </span>
           </form>
       </div>
    );
}

export default FormSignin
