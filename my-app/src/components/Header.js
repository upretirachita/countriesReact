import React from 'react';
import './Header.css';

 
const Header = (props) => {
 return(
   <div>
      {props.title}{props.totalFilteredCountries}{props.totalCountries}
    </div>
 );
}

export default Header;