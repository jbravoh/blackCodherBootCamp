import React from "react";
import {Link} from 'react-router-dom';
import './About.css';


function About() {
 return (
    <React.Fragment>
      <div>
        <h1 className="aboutHeader">Welcome to the Bookcase Application</h1>
        <p className="description">The following application was created by Jay-Ann Bravo-Harriott. This bookcase app displays a list of books that a user can save to a local bookcase.</p> 
        <p className="description">Click on the "Add + " button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description.</p>
      </div>
    </React.Fragment>

  );
}

export default About;