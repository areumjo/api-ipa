import React from 'react';

const BeerCard = props => {

  const beerData = props.callBeer[0];
  console.log(beerData)
  return (
    <div className="beer-card">
      <h3>{beerData.name}</h3>
      <img src={beerData.beer_img} alt="beer image" />
      <p>{beerData.beer_style}</p>
      <p>{beerData.desc}</p>
      
    </div>
  );
};

export default BeerCard;