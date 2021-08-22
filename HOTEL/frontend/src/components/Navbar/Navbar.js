import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Search } from '../pages/Home/Search';
import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../Services/AuthService';
import { Redirect } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
    const {users,setUsers,isAuthenticated,setIsAuthenticated, isLoaded}  = useContext(AuthContext);
    console.log(isLoaded);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const handleLogin = () => {
        if (window.confirm("Are you sure, you want to logout!")) {
            AuthService.logout().then(data=>{
                if(data.success){
                    setUsers(data.user);
                    setIsAuthenticated(false);
                    return <Redirect to='/' />
                }
            });
            }
        else{}
    }
    useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            setClick(false);
        });
    });
   
    const unAuthenticatedNavbar = () =>{
        return(
            <>
                <li className="nav-item">
                    <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/register" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 Register
                    </NavLink>
                </li>
            </>
        );
    }

    const AuthenticatedNavbar = () =>{
        return(
            <>
               <div className="nav-item dropdown">
                     <button activeClassName="active" className="nav-links dropbtn"> 
                        {users.username} <i className="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <li className="nav-item">
                                <NavLink exact to="/Profile" activeClassName="active" className="nav-links" onClick={handleClick}>
                                            Profile
                                </NavLink>
                             </li>
                             <li className="nav-item " onClick={handleClick}>
                                <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleLogin}>
                                            Logout
                                </NavLink>
                            </li>
                             
                        </div>
                </div>  
                {/* <li className="nav-item">
                    <NavLink exact to="/Profile" activeClassName="active" className="nav-links">
                                 Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleLogin}>
                                 Logout
                    </NavLink>
                </li> */}
            </>
        )
    }
      
    return (
        <>
           <nav className="navbar">
               <div className="nav-container">
                    <NavLink exact to="/" className="nav-logoicon">
                      <img src={logo} alt="brand" height={"60"} width={"60"}></img>
                   </NavLink>
                   <NavLink exact to="/" className="nav-logo">
                       <b>Hotels</b>
                       {/* <img src={logo} alt="brand"></img> */}
                       {/* <i className="fas fa-code"></i> */}
                   </NavLink>
                    
                   <ul className={click ? "nav-menu active" : "nav-menu"}>
                         <li className="nav-item">
                             <div className="search-bar-nav">
                             <Search/>
                             </div>    
                        </li>
                       <li className="nav-item">
                           <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                                 contact_us
                            </NavLink>
                        </li>
                        {isAuthenticated ? AuthenticatedNavbar() : unAuthenticatedNavbar()}
                   </ul>
                   <div className="nav-icon" onClick={handleClick}>
                       <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                   </div>
               </div>
           </nav>
        </>
    )
}

export default Navbar
