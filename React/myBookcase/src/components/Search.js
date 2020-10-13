import React, {useState} from 'react';

const Search = (props) => {
    const [keyword, setKeyword] = useState(''); //declaring the variable and method and useState tells it where to store the data 
    return (
        <form onSubmit={handleSubmit}>
            <h1>{keyword && 'Searching for keyword:' + keyword}</h1>
            <input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)}></input>  
            <button>Search</button>
            {keyword}
        </form> 

        const handleSubmit  = (event) => {
            event.preventDefault();
            props.findBooks(props.keyword);
        }
    );
 }

 // line 9 : ensures the input field is a controlled component by setting the value of the input field to a props attribute passed in by calling the component.



export default Search;