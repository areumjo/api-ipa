import React, { useState, useEffect } from 'react';
import { Loader, Button } from 'semantic-ui-react';
import axios from 'axios';

import Selection from './Selection.js';
import JsonCompo from './JsonCompo.js';

const ApiCall = () => {

  const [apiState, setApiState] = useState([]);
  const [beer, setBeer] = useState('');

  const [allBeer, setAllBeer] = useState([]);

  useEffect(() => {
    axios
      .get('http://areumjo-api-ipa.herokuapp.com/beer/all')
      .then(data => {
        setAllBeer(data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`http://areumjo-api-ipa.herokuapp.com/beer/${beer}`)
      .then(data => {
        console.log(data);
        setApiState(data.data);
      })
      .catch(err => console.log(err));
  };

  return(
    <div>
      <div className="container">
        <h2>All API-IPA <span>🍺</span> through a RESTful API</h2>
        <p>Try it now!</p>
      </div>
      <div className="center">
        <h2>Test API-API call</h2>
        {allBeer.length>0 ? <Selection allBeer={allBeer} setBeer={setBeer} setApiState={setApiState}/> : <Loader active>Loading</Loader>}
        {allBeer.length>0 && <Button onClick={handleSubmit}>Submit</Button>}
      </div>
        {apiState.length>0 && <JsonCompo apiState={apiState}/>}
    </div>
  )
};

export default ApiCall;