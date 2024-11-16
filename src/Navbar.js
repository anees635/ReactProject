import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './Navbar.css';
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
   <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.mode} flexcontainer`}>
  <div className="container-fluid">
    <div>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Text">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
 </nav>
        

        <Outlet/>
   </>
  )
}
Navbar.propTypes= {
    title: PropTypes.isRequired
};
