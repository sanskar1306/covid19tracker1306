import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"

import './App.css';
import {Data} from './components/dat';


function App() {
  
  const [theme, setTheme] = useState('light');
    
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div className="App">
      <header className="App-header">
       <h1>COVID19 TRACKER</h1>
       <button onClick={themeToggler} className="butDar">Switch Theme</button>
      </header>
       <Data />
      
      
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
