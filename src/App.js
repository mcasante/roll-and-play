import React, { useState } from 'react';

import Sign from './components/Sign'

import './App.css';
//import api from './services/api';

import logo from './assets/Roll_and_Play_logo-subtracted.svg'

function App() {

  const [ darkMode, setDarkMode ] = useState(false)

  function changeMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div id="app">
      <div className="topbar"></div>
      <header>
        <div className="container">
          <button className="change_theme" onClick={changeMode}>LIGHT MODE</button>
        </div>
      </header>
      <main>
        <div className="container" style={styles.container}>
          <Sign />
          <section>
            <img src={logo} alt=""/>
          </section>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: 45
  }
}

export default App;
