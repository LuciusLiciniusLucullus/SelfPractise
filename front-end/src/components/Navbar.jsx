import React from 'react';
import {Link} from 'react-router-dom';



function Navbar(){
    return <nav className="navbar bg-dark container">
        <h4><Link to='/'>Hi</Link></h4>
        <h4><Link to='/home'>Home</Link></h4>
        <h4><Link to='/handler'>Handler</Link></h4>
        <h4><Link to='/weatherAPI'>WeatherAPI</Link></h4>
        <h4><Link to='/useEffectPrac'>Fun Use Effect</Link></h4>
    </nav>
}

export default Navbar;