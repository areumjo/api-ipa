import React from 'react';

const JsonCompo = props => {
  console.log('props: ', props.apiState);
  const api = props.apiState[0];
  
  return(
    <div>
      {/* <p>name: {api.name}</p>
      <p>brewary: {api.brewary}</p>
      <p>family: {api.family}</p> */}
      <p>{JSON.stringify(api, null, ' ')}</p>

    </div>
  )
};

export default JsonCompo;
