import React from "react";
import '../stylesheets/About.css'; // must write '..' to go out the 'pages' folder
import {Link} from 'react-router-dom';


function About() {
 return (
    <React.Fragment>
      <div className="aboutContainer">
        <h1 className="aboutHeader">Welcome to the Bookcase Application</h1>
        <div className="descriptionContainer">
          <p className="paragraph">The following application was created by <span>Jay-Ann Bravo-Harriott</span>.</p>
          <p className="paragraph">This bookcase app displays a list of books that a user can save to a local bookcase.</p> 
          <p className="paragraph">Click on the <span className="add">Add+</span> button to add a book to your bookcase. </p>
          <p className="paragraph">Use the <span className="searchSpan"> Search</span> <span>bar</span> to find the latest books by <span>name</span>, <span>author</span> or <span>description</span>.</p>
        </div>
        <Link to="/" className="aboutButton">
              <button className="aboutButton">Go to Booklist!</button>
        </Link>
      </div>
      
    </React.Fragment>

  );
}

export default About;