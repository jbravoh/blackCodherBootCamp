import React, {useState} from 'react';

const Search = (props) => {
    //declaring the variable and method and useState tells it where to store the data 
    
    const handleSubmit  = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword);
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{props.keyword && 'Searching for keyword:' + props.keyword}</h1> */}
            <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}></input>  
            <button>Search</button>
        </form> 
    );

       

    
 }

 // line 9 : ensures the input field is a controlled component by setting the value of the input field to a props attribute passed in by calling the component.



export default Search;