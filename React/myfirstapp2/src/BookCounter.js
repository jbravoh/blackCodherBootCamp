import React, {useState} from 'react';
import './BookCounter.css';

const BookCounter = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div className="booklist">
    <h1 className= 'bookCounterH1'>{props.library.name}'s Books ({count})	&#8595;</h1>
    <button className='bookCounterButton' onClick={() => setCount(count + 1)}>Count Books</button>
      <ul>
        <li className='bookList'>Half of a Yellow Sun</li>
        <li className='bookList'>Black Leopard, Red Wolf</li>
        <li className='bookList'>Born a Crime</li>
        <li className='bookList'>Americanah</li>
        <li className='bookList'>Ghana Must Go</li>
      </ul>
    </div>
  );
}

export default BookCounter;

