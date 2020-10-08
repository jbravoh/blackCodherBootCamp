import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './product';

// function App() {
//   const h1Style = {"fontSize":"60px", "color":"yellow"};
//   return ( // all this text looks like HTML but it is not
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 style={h1Style}className="h1Style">My First React App</h1>
//           Learn React
//       </header>
//     </div>
//   );
  
// }

function App() {
  return ( // all this text looks like HTML but it is not
      <div>
        <Product
         name="Between The World And Me" 
         author="by Ta-Nehisi Coates"
          price="£7.99"
          description="A 2015 winner of the National Book Award for non-fiction, the renowned journalist and writer pens a profound letter to his son about what it means to be Black in America in the 21st century — a place in which you struggle to overcome the historical trauma of your people while trying to find your own purpose in the world."/>
        <Product 
        name="Queenie" 
        author="by Candice Carty-Williams"
        price="£7.99"
        description="In one of 2019's most talked about novels, a 25-year-old journalist in London attempts to recover from a terrible break up with her long-time boyfriend. But while on the path to finding happiness, road blocks, questionable decisions, and more-than-a-few problematic men get in her way."
        image="https://images-na.ssl-images-amazon.com/images/I/51GfKYfVIpL._SX350_BO1,204,203,200_.jpg"
        alt="Queenie book cover"/>
        
        <Product
         name="Becoming" 
         author="..."
        price="..."
        description="..."/>
        <Product
        name="The Colour Purple" 
        author="..."
        price="..."
        description="..."/>
        <Product
        name="Fault in Our Stars" 
        author="..."
        price="..."
        description="..."/>
        </div>
  )
}

      
/*  function App() {
        return(
          <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={h1Style}className="h1Style">My First React App</h1>
          Learn React
      </header>
    </div>
  );
      
      <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={h1Style}className="h1Style">My First React App</h1>
          Learn React
      </header>
    </div>
  );
  
} */

export default App;
