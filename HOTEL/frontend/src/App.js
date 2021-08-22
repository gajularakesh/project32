import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Link,BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { contact } from './components/pages/Contact_us/contact';
import { Home } from "./components/pages/Home/Home";
import { About } from "./components/pages/About/About";
import {FormReg} from "./components/pages/Register/FormReg"
import { FormLog } from './components/pages/Login/FormLog';
import { Profile } from './components/pages/profile1/Profile';
import HotelService  from './Services/HotelService';
import { Hotel } from './components/pages/Hotel/Hotel'
// import { Payment } from './components/pages/Hotel/Payment';
import { Maps } from './components/pages/Maps/Maps'
import { Bookings } from './components/pages/profile1/Bookings'
import Message from './components/pages/Login/Message';
import {Manager} from './components/pages/Manager/Manger';
import { Check } from './components/pages/Manager/Bookings';
import { Update } from './components/pages/profile1/Update';
import Forgot from './components/pages/Login/Forgot';
import Newpassword from './components/pages/Login/Newpassword';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Message/>
        <div className="pages" id="myDiv">
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path = "/about" component={About}/>
          <Route path = "/contact" component={contact}/>
          <Route path = "/register" component={FormReg}/>
          <Route path= "/login" component={FormLog}/>
          <Route path= "/Profile" component={Profile}/>
          <Route path= "/map" component={Maps}/>
          <Route path="/hotel/:hotelId" component={Hotel} />
          <Route path="/Bookings/:userId" component={ Bookings } />
          <Route path="/Manager" component={ Manager }/>
          <Route path="/check/hotel/:hotelId" component={ Check } />
          <Route path="/user/update/:userId" component={ Update } />
          <Route path="/forgot" component={ Forgot }/>
          <Route path="/reset/:token" component={ Newpassword } />
          </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;

// import { XMapbox } from "elements-x/dist/mapbox";
// XMapbox.accessToken =
//   "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";
//   function App() {
  
//      return (
//            <>
//                <x-div>
//                   <x-mapbox>
//                     <x-marker id="marker" lnglat="Toronto, Canada" center>
//                       Looking For Here?
//                     </x-marker>
//                   </x-mapbox>
//                 </x-div>
//            </>
//   );
// }

// export default App;
const Hotel1 =  ({ match }) => {
  console.log('cames');
  const {
    params: { hotelId },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    HotelService.hotel(hotelId).then(data=>{
      const {message} = data;
      setData(message);
      console.log(data);
      setIsLoading(false);
    })
  })
  //   fetch(`/hotel/${hotelId}`, {})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(response);
  //       console.log(data);
  //       setIsLoading(false);
  //       console.log(`hotel/${hotelId}`);
  //     })
  //     .catch((error) => console.log(error));
  // }, [hotelId]);

  return (
    <>
      {!isLoading && (
        <>
          <h1>Name: {data}</h1>
          
        </>
      )}
    </>
  );
}

