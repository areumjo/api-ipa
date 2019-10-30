import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Selection from './components/Selection.js';
import BeerCard from './components/BeerCard.js';
import Chart from './components/charts/Chart.js';
import './App.css';
import { Loader } from 'semantic-ui-react';

function App() {

  const [allBeer, setAllBeer] = useState([]);
  const [beer, setBeer] = useState('');
  const [callBeer, setCallBeer] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/beer/all')
      .then(data => {
        setAllBeer(data.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/beer/${encodeURIComponent(beer)}`)
      .then(data => {
        // console.log('callBeer:', data);
        setCallBeer(data.data);
      })
      .catch(err => console.log(err));
  }, [beer]);

  return (
    <div className="App">
      <header className="App-header">
        <p>API-IPA <span role="img">🍺</span></p>
      </header>
      {allBeer.length>0 ? <Selection allBeer={allBeer} setBeer={setBeer}/> : <Loader active/>}
      <div className="divided">
        {callBeer.length>0 && <Chart callBeer={callBeer}/>}
        {callBeer.length>0 && <BeerCard callBeer={callBeer}/>}
      </div>
    </div>
  );
}

export default App;
