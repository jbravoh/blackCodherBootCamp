import  React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <h1>My Bookcase</h1>
            <Link to ="/">Home</Link>
            <Link to ="/bookcase">Bookcase</Link>
        </React.Fragment>
    )
}

export default Header; // always need to export page