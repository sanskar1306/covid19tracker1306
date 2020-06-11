import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Data} from './components/dat';
import Covid from './covid.png'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       <h1>COVID19 TRACKER</h1>
      </header>
      <Data />
      
      
    </div>
  );
}

export default App;
