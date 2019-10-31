import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import ApiCall from './components/ApiCall.js';
import VisApp from './components/VisApp.js';
import Selection from './components/Selection.js';
import BeerCard from './components/BeerCard.js';
import Chart from './components/Chart.js';
import './App.css';
import { Loader } from 'semantic-ui-react';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={ApiCall} />
      <Route path="/rating" component={VisApp} />
      {/* {allBeer.length>0 ? <Selection allBeer={allBeer} setBeer={setBeer}/> : <Loader active/>}
      <div className="divided">
        {callBeer.length>0 && <Chart callBeer={callBeer}/>}
        {callBeer.length>0 && <BeerCard callBeer={callBeer}/>} */}
      
      {/* </div> */}
    </div>
  );
}

export default App;
