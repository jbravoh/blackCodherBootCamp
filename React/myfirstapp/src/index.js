// import React, {Fragment} from 'react'; //essential for creating apps

// import ReactDOM from 'react-dom'; //essential for creating apps
// import books from './books.json';
//  import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const element = <h1>My Reading List</h1>
// console.log(element);
// ReactDOM.render(element, document.getElementById('root'));


/
// const name = 'Jay-Ann';

// function Greeting(user) {
//   if (user) {
//     return <h1> {name}'s Reading List</h1>;
//   }
//   return <h1> Just a Reading  List</h1>;
// }

// //const element = <h1> {name}'s Reading List</h1>
// //console.log(Greeting(name));
// //ReactDOM.render(Greeting(name), document.getElementById('root'));
// //ReactDOM.render(element, document.getElementById('root'));

// //rendering the <<React.StrictMode> //component - special tag that doesnt render anything on the screen. It validates the component underneath. Used in developer mode.
// ///<App />example of a JSX component

// /*
// ReactDOM.render(
//   <React.StrictMode> // rendering this component
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// ); */

//TASK 1

// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import BookCounter from './BookCounter';
// const element = <Fragment>
// <h1>Welcome to My Library</h1>
// <BookCounter library={{name:"Jay-Ann",theme:"Modern"}}/>
// </Fragment>;
// ReactDOM.render(element,document.getElementById('root'));

// TASK 2
// const formatter = new Intl.NumberFormat('en-GB', {
//   style: 'currency',
//   currency: 'GBP'
//   })
//   const book = books[0];
//   let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
//   const element = <Fragment>
//   <h1 id={id}>{title} = {formatter.format(amount)}</h1>
//   </Fragment>;
//   ReactDOM.render(element,document.getElementById('root'));

// const element = <Fragment>
//     {books.map(book => {
//       let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice }} = book;
//     return (
//       <div>
//         <p>{title}</p>
//         <p>{authors}</p>
//         <p>{description}</p>
//       </div>

//     )
// })}
// </Fragment>;

// ReactDOM.render(element,document.getElementById('root'));

import React, { useState } from "react";
import ReactDOM from "react-dom";

const LogForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [hasSubmitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      {hasSubmitted && (
        <div>
          <p>
            {name}, {age}, {location}
          </p>
        </div>
      )}
    </>
  );
};

ReactDOM.render(<LogForm />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
