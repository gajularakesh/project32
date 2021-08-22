import React, { useEffect, useState, useContext } from 'react';
import './Message.css';
import { AuthContext } from '../../../Context/AuthContext';
import { DataContext } from '../../../Context/DataContext'

const Message = (props) => {
    console.log(props.msgBody);
    // const{setalert,alert} = useFormLog(props);
    const authContext = useContext(AuthContext);
    const dataContext = useContext(DataContext);
//   setalert(true);
  console.log(authContext.alert);
  useEffect(() => {
    const timer = setTimeout(() => {
          authContext.setalert(false);
         // return <Redirect to="#"/>
        //   setclick(!click);
     }, 10000); 
     return () => clearTimeout(timer);
   },[authContext.alert]);     
    const status = dataContext.msg.msgError;
    console.log(status);
  return (
    //  alert && <p>loading</p>
    authContext.alert && <div className={status?"alert alert-true":"alert alert-false"}><p>{dataContext.msg.msgBody}</p></div>
  );
}

export default Message;