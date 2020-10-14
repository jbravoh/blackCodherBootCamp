import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import '../stylesheets/Search.css';

const Search = (props) => {
    //declaring the variable and method and useState tells it where to store the data 
    
    const handleSubmit  = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword);
    }
    return (
// // Bootstrap form 
//         <Form className="searchBar" onSubmit={handleSubmit}>
//             <Form.Group controlId="searchKeyword">
//                 {/* <Form.Label>Enter Search</Form.Label> */}
                
//                 <Form.Control type="keyword" placeholder="Enter keyword" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
//             </Form.Group>
//             <Button className="button" variant="primary" type="submit">
//             Submit
//             </Button>
//         </Form>

         <form className="search" onSubmit={handleSubmit}>
            <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}></input>  
            <button>Search</button>
        </form> 
    );
}

       

    






export default Search;