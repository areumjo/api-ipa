import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Selection from './Selection.js';
import Chart from './Chart.js';
import BeerCard from './BeerCard.js';
import { Loader } from 'semantic-ui-react';

const VisApp = props => {

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


  return(
    <div>
      <div className="container">
        <h2>Visualize yearly rating of your favorite IPA <span>🍺</span></h2>
      </div>
      {allBeer.length>0 ? <Selection allBeer={allBeer} setBeer={setBeer}/> : <Loader active/>}
      {callBeer.length>0 && <Chart callBeer={callBeer}/>}
      {callBeer.length>0 && <BeerCard callBeer={callBeer}/>}
    </div>
  )
};

export default VisApp;