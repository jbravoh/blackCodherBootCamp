import React from "react";
import {Link} from 'react-router-dom';
import '../stylesheets/Header.css';

const Header = () => {
    return (
        <React.Fragment>
        <div className="headerContainer">
            <h1 className="appTitle">My Bookcase</h1>
            <div className="linkContainer">
                <Link className="navLink" to ="/">Home</Link>
                <Link  className="navLink" to ="/about">About</Link>
                <Link className="navLink" to ="/bookcase">Bookcase</Link>
                
            </div>
        </div>
        </React.Fragment>
    )
}




export default Header; // always need to export page