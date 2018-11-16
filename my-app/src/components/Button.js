import React from 'react';



 /* <button onClick={this.getCountriesStarts}>Search by First Letter</button>
    <button onClick={this.getCountriesWords}>Search By Any </button>*/

const Button = (props) => {
    return(
            <div>
                <button onClick={props.handleClick} >{props.title}</button>
            </div>
    );
}
   
export default Button;