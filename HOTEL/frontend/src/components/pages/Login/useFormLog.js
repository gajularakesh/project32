// import { useState, useEffect } from 'react';
import {useState, useContext} from 'react';
import validate from './validatelogin'
import {AuthContext} from '../../../Context/AuthContext';
import AuthService from '../../../Services/AuthService';
import { DataContext } from '../../../Context/DataContext';
// import HotelService from '../../../Services/HotelService';
const useFormLog = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [message,setMessage] = useState(null);
  const [click, setclick] = useState(false);
  // const [alert, setalert] = useState(true);
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(user));
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      AuthService.login(user).then(data=>{
        const { isAuthenticated,user,message} = data;
        console.log(data);
            dataContext.setmsg(message);
            setclick(true);
            authContext.setalert(true);
        if(isAuthenticated){
            authContext.setUsers(user);
            authContext.setIsAuthenticated(isAuthenticated);
        }
        else{
        }
      });
      console.log(alert);
      // if(message)
      //   setclick(true);
    }
  };

  return { handleChange, handleSubmit, user, errors, message,click,setclick};
};

export default useFormLog;