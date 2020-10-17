import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css";
import Search from "./Search";

const Header = (props) => {
  // const [keyword, setKeyword] = useState('');

  return (
    <React.Fragment>
      <div className="headerContainer">
        <h1 className="appTitle">My Bookcase</h1>
        <div className="linkContainer">
          <Link className="navLink" to="/">
            Booklist
          </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/bookcase">
            Bookcase
          </Link>
        </div>
        <Search
          findBooks={props.findBooks}
          keyword={props.keyword}
          setKeyword={props.setKeyword}
        />
      </div>
    </React.Fragment>
  );
};

export default Header; // always need to export page
