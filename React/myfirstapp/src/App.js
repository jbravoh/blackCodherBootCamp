import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = { "fontSize":"60px", "color":"yellow"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={h1Style}className="h1Style">My First React App</h1>
          Learn React
      </header>
    </div>
  );
  

  
}

export default App;
