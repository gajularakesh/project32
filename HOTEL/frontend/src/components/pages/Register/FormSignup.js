import React,{useRef, useContext} from 'react'
import useFormReg from './useFormReg'
import {DataContext} from '../../../Context/DataContext'
// import validatereg from './validateregister'
import classes from '../Form.module.css'
import { Redirect } from 'react-router-dom';
const FormSignup = () => {
    const{handleChange, user, handleSubmit, errors} = useFormReg();
    const dataContext = useContext(DataContext);
    // let timerID = useRef(null);
    console.log(dataContext.msg.msgError);
    if(dataContext.msg.msgError===false){
        // timerID = setTimeout(()=>{
            console.log(dataContext.msg.msgError+"anil");
         return <Redirect to='/login' />
        // },2000)
    }

    //console.log(message);
    return (
       <div className={classes.formcontentright}>
           <form className={classes.form} onSubmit={handleSubmit}>
               <h1>get started with us today! create your account by filling out the information below</h1>
               <div className={classes.forminputs}>
                    <label htmlFor="username" 
                    className={classes.formlabel}>
                        Username*
                    </label>
                    <input
                        id="username"
                        type="text" 
                        name="username" 
                        className={classes.forminput}
                        placeholder="enter your name"
                        value = {user.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
               </div>
               <div className={classes.forminputs}>
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        Email*
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email" 
                        className={classes.forminput}
                        placeholder="enter your mailid"
                        value = {user.email}
                        onChange={handleChange}
                        />
                      {errors.email && <p>{errors.email}</p>}
               </div>
               <div className={classes.forminputs}>
                    <label htmlFor="email" 
                    className={classes.formlabel}>
                        Phone Number*
                    </label>
                    <input
                        type="tel" name="phone"
                        pattern="[0-9]{10}"
                        required
                        className={classes.forminput}
                        placeholder="mobile number"
                        value = {user.phone}
                        onChange={handleChange}
                        />
                      {errors.phone && <p>{errors.phone}</p>}
               </div>
               <div className={classes.forminputs}>
                    <label htmlFor="password" 
                    className={classes.formlabel}>
                        Password*
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
               <div className={classes.forminputs}>
                    <label htmlFor="password2" 
                    className={classes.formlabel}>
                        Confirm Password*
                    </label>
                    <input
                        id="password2"
                        type="password" 
                        name="password2" 
                        className={classes.forminput}
                        placeholder="reenter your password"
                        value = {user.password2}
                        onChange={handleChange}
                        />
                         {errors.password2 && <p>{errors.password2}</p>}
               </div>
               <button className={classes.forminputbtn}
               type="submit" >
                   Sign up
               </button>
               <span className={classes.forminputlogin}>
               {/* {message && <p>{message.msgBdy}</p>} */}
               Already have an account? Login <a href="/login">here</a>
               </span>
           </form>
       </div>
    );
}

export default FormSignup
