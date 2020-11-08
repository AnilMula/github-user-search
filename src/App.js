import React from 'react';
//import { Col } from 'react-bootstrap';
import logo from './anil.jpg';

import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main></Main>
    </div>
  );
}

export default App;
