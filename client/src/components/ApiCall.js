import React, { useState, useEffect } from 'react';
import { Loader, Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';

import Selection from './Selection.js';
import JsonCompo from './JsonCompo.js';

const ApiCall = () => {

  const [apiState, setApiState] = useState([]);
  const [beer, setBeer] = useState('');

  const [allBeer, setAllBeer] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/beer/all')
      .then(data => {
        setAllBeer(data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/beer/${beer}`)
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
        {/* <Form onSubmit={handleSubmit}>
          <Input 
            label='http://' 
            placeholder='Beer name'
            name='name'
            value={beerName}
            onChange={handleChange}
          />
          <Form.Button content='Submit' />
        </Form> */}
        {beer.length>0 && <label>http://localhost:5000/beer/{beer}</label>}
        
        {allBeer.length>0 ? <Selection allBeer={allBeer} setBeer={setBeer} setApiState={setApiState}/> : <Loader active/>}
        <Button onClick={handleSubmit}>Submit</Button>
        <p>need a hint? try your favorite beer!</p>
      </div>
      <div className="center">
        <h2>Test API call</h2>
        <div className="box">
          {apiState.length>0 && <JsonCompo apiState={apiState}/>}
        </div>
      </div>
    </div>
    
  )
};

export default ApiCall;