import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return(
    <header className="App-header">
        <h3>API-IPA <span role="img">🍺</span></h3>
        <div className="App-header-right">
          <h3><Link to="/">API call</Link></h3>
          <h3><Link to="/rating">Rating</Link></h3>
          <h3><Link to="/about">About</Link></h3>
        </div>
        
    </header>
  )
}

export default Header;