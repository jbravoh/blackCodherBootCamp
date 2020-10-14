import React from 'react';
import Book from './Book';
import "../stylesheets/BookList.css";

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => (
                <Book key={book.id} book={book} addBook={props.addBook}/> // use key as an identfier to find a specifc element
            ))}
        </div>
  );
}

export default BookList;

