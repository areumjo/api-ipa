import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Selection from './components/Selection.js';
import BeerCard from './components/BeerCard.js';
import './App.css';

// search by beer-name : URL encode '%20'
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
        console.log('callBeer:', data);
        setCallBeer(data.data);
      })
      .catch(err => console.log(err));
  }, [beer])
  console.log('beer: ', beer, 'callBeer: ', callBeer)
  return (
    <div className="App">
      <header className="App-header">
        api-ipa
      </header>
      {allBeer.length>0 && <Selection allBeer={allBeer} setBeer={setBeer}/>}
      {callBeer.length>0 && <BeerCard callBeer={callBeer}/>}
      
    </div>
  );
}

export default App;
