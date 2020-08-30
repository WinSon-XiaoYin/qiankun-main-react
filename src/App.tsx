import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { refreshToken } from "@mfe-common/auth"
import axiosRetry from "@mfe-common/http"
import axios from 'axios';

function App() {

  useEffect(() => {
    // refreshToken("refreshToken")
    // axiosRetry(axios, { retries: 3 })
  }, [])
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <div id="frame"/>
    </div>
  );
}

export default App;
