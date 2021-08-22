import React,{useState} from 'react'
import FormSignin from './FormSignin'
import FormSuccess from '../FormSuccess'
import classes from '../Form.module.css'
export const FormLog=()=>{
    const [IsSubmitted, setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
        console.log(IsSubmitted);
    }
    return ( 
        <>
        <div className={classes.formcontainerlog}>
        <span className={classes.closebtn}><a href="/" ><i className="fa fa-arrow-left" aria-hidden="true"></i> </a></span>
        <div className={classes.formcontentleft}>
            {/* <img alt="anilimg" className={classes.formimg}/> */}
            <p>Hotels <i className="fas fa-code"></i></p>
            <h6>great to see you back!</h6>
        </div>
            {IsSubmitted?(<FormSuccess/>):
            (<FormSignin submitForm={submitForm}/>)}
        </div>
        </>
    )
}

// export default Form
