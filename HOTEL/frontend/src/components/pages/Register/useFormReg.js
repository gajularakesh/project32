// import { useState, useEffect } from 'react';
import { useState,useContext } from 'react';
import validate from './validateregister'
import AuthService from '../../../Services/AuthService'
import { DataContext } from '../../../Context/DataContext'
import {AuthContext} from '../../../Context/AuthContext';

// const useForm = (callback, validate) 
const useFormReg = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
  });
 const dataContext = useContext(DataContext);
 const authContext = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const resetForm=()=>{
    setUser({username : "", email : "", phone : "", password : "", password2 : ""});
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  // let timerID = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    setErrors({})
    if(Object.keys(errors).length === 0)
    {
      setErrors(validate(user));
    }
    if (Object.keys(errors).length === 1) {
      // setUsers(username: user.username,email:user.email,phone:user.phone,user.password)
      console.log(user);
      delete user.password2
      console.log(user);
      
      AuthService.register(user).then(data=>{
        const { message } = data;
        // setmessage(message.msgBdy);
        resetForm();
        dataContext.setmsg(message);
        // setclick(true);
        console.log(message);
        authContext.setalert(true);
        }
    );
  } 
  };
  return { handleChange, handleSubmit, user, errors};
};

export default useFormReg;