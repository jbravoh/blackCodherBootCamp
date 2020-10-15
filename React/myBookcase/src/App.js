import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
// import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/Home.css';


const App = (props) => { 
  const [books, setBooks] = useState(data); 
  const [keyword, setKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]); // this is to add books to the bookcase
  

  function addBook(title, id) { // this function remove the book when it is clicked 
    const newBookList = books.filter(book => book.id !== id); // this only filt
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]); // create an array and keep storing 

  //   const remainingBooks = []
  //   let chosenBook = null
  //   books.forEach((book) => {
  //   if (book.id !== id) {
  //     remainingBooks.push(book);
  //   } else {
  //     chosenBook = book;
  //   }
  // // });

  // setBooks(remainingBooks);
  // setBookcase([...bookcase, chosen]);

    console.log(`The book ${title} was clicked`)
  } 

  function removeBook(id) {
    const newBookcaseList = books.filter(book => book.id !== id); 
    setBookcase(newBookcaseList);
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
            <Header findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} /> 
            {/* <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} /> */}
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )} />

        <Route exact path="/about" render={() => (
          <React.Fragment>
            <Header />
            <About />  
          </React.Fragment>
        )} /> 
  

        <Route exact path="/bookcase" render={() => (
          <React.Fragment>
            <Header />
            <BookList books={bookcase} removeBook={removeBook}/>
          </React.Fragment>
        )} />
      </Router>
    </>
  );
}



export default App;





