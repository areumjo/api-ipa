import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import ApiCall from './components/ApiCall.js';
import VisApp from './components/VisApp.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={ApiCall} />
      <Route path="/rating" component={VisApp} />
    </div>
  );
}

export default App;
