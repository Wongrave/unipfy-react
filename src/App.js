import React from 'react';
import logo from './logo.svg';
import './App.css';
import QualquerNomeDeComponente from './hello-world'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <QualquerNomeDeComponente nome="world" />
        <QualquerNomeDeComponente nome="SI3 e SI4" />

      </header>
    </div>
  );
}

export default App;
