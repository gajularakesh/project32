import React from 'react'
import FormSignup from './FormSignup'
// import FormSuccess from '../FormSuccess'
import classes from '../Form.module.css'
export const FormReg=()=>{
    // const [IsSubmitted, setIsSubmitted] = useState(false);
    // function submitForm(){
    //     setIsSubmitted(true);
    //     console.log(IsSubmitted);
    // }
    return ( 
        <>
        <div className={classes.formcontainerreg}>
        <span className={classes.closebtn}><a href="/" ><i className="fa fa-arrow-left" aria-hidden="true"></i> </a></span>
        <div className={classes.formcontentleft}>
            {/* <img alt="anilimg" className={classes.formimg}/> */}
            <p>Hotels <i className="fas fa-code"></i></p>
            <h6>get started with us today! create your account by filling out the information below</h6>
        </div>
            <FormSignup/>
        </div>
        </>
    )
}

// export default Form
