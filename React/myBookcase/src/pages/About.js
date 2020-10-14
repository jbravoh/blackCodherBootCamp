import React from "react";
import '../stylesheets/About.css'; // must write '..' to go out the 'pages' folder


function About() {
 return (
    <React.Fragment>
      <div className="aboutContainer">
        <h1 className="aboutHeader">Welcome to the Bookcase Application</h1>
        <div className="descriptionContainer">
          <p className="description">The following application was created by <span>Jay-Ann Bravo-Harriott</span>.</p>
          <p className="description">This bookcase app displays a list of books that a user can save to a local bookcase.</p> 
          <p className="description">Click on the "<span>Add + </span>" button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description.</p>
        </div>
      </div>
    </React.Fragment>

  );
}

export default About;