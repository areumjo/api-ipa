import React from 'react';
import {Dropdown} from 'semantic-ui-react';

const Selection = props => {
  // console.log(props.allBeer)
  // let agg = [{text: 'IPA', value:'IPA'}, {text: 'API', value: 'API'}]
  let selectBeer = [];
  for (let i = 0; i < props.allBeer.length; i++) {
    selectBeer.push({text: props.allBeer[i], value: props.allBeer[i]});
  }

  const handelChange = (e, {value}) => {
    // console.log(value)
    props.setBeer(value);
  }

  return(
    <div style={{margin: "50px auto", width: "500px"}}>
      
      <Dropdown
        placeholder='Select Beer'
        fluid
        search
        selection
        options={selectBeer}
        onChange={handelChange}
        // options={props.allBeer}
      />
    </div>
  )
};

export default Selection;