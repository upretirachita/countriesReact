import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Button from './components/Button';
import {COUNTRIES} from './shared/countries';



class App extends Component {
    state = {
    countries:COUNTRIES,
    filteredCountries:[],
    inputUser:"",
    flag:true,
    }
    
  getCountriesStarts = () =>{
    const filteredCountries = this.state.countries.filter(country => {
      return country.toLowerCase().startsWith(this.state.inputUser)
    })
    this.setState({
      filteredCountries,
      flag:true,
    });
  }

    randomColorGenerator = () =>{ 
    var random = Math.random();
    var stringDigit = random.toString(16);
    var sixDigit = stringDigit.slice(2,8);
    var color= (`#${sixDigit}`); 
    return color;    
    } 
 
  getCountriesWords = () =>{
    const filteredCountries = this.state.countries.filter(country => {
    return country.toLowerCase().includes(this.state.inputUser)
    }) 
    this.setState({
      filteredCountries,
      flag:false
    })
  }

  userInput = (e)=>{
  this.setState({inputUser:e.target.value.toLowerCase()})
  }

render() {
    return (
      <div className="App">
      <div className="main">
        <Header
         title="Total number of countries is"
         totalCountries={this.state.countries.length}
         />
        <input type="text"  placeholder="Search Countries" onChange={this.userInput}/>
        <Header
         title="Total number of countries filtered is"
         totalFilteredCountries={this.state.filteredCountries.length}
         /> </div>
        
        <div >
              <Button 
                handleClick ={this.getCountriesStarts}
                title="Countries Start With"
                />
                <Button 
                handleClick ={this.getCountriesWords}
                title="Countries With Any"
                />
        
            {this.state.filteredCountries.length > 0 ?
            <div className="filteredCountries" >
            
                {
                  this.state.filteredCountries.map((country,i)=>{
                  return <div style={{background: '#ecd74d', color: 'white'}} key={'country-' +i}>{country}</div>
                })
                }
            </div> :
          <div className="filteredCountries">
                {
                  this.state.countries.map((country,i)=>{
                  return <div style={{background: this.randomColorGenerator(), color: 'white'}} key={'country-' +i}>{country}</div>
                })
                }
              </div>
            }
          </div>
      
      </div>
    );
  }
}

export default App;

