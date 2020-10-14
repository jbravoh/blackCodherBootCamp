import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/Home.css';


const App = (props) => { 
  const [books, setBooks] = useState(data); 
  const [keyword, setKeyword] = useState('');

  function addBook(title, id) { // this function remove the book when it is clicked 
    const newBookList = books.filter(book => book.id !== id); // this only filt
    setBooks(newBookList);
    console.log(`The book ${title} was clicked`)
  } 

  async function findBooks(term) { 
    const results = await fetch
    (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks
&print-type=books&projection=lite`).then(res => res.json());
    setBooks(results.items);
  
  }

  // This return renders the navigation menu from Header.js
  return (
    <>
      <Router>
        <Route exact path="/" render={() => (
          <React.Fragment>
            <Header />
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )} />

        <Route exact path="/bookcase" render={() => (
          <React.Fragment>
            <Header />
          </React.Fragment>
        )} />

        <Route exact path="/about" render={() => (
          <React.Fragment>
            <Header />
            <About />  
          </React.Fragment>
        )} /> 
      </Router>
    </>
  );
}



export default App;





