import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';

const countriesLists = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

class App extends Component {
    state = {
    filteredcountriesList:[],
    filteredCountriesWords:[],
    inputUser:"",
    }
    
  getCountriesStarts = () =>{
     let x = countriesLists.filter(country => {
      return country.startsWith(this.state.inputUser)
    })
    this.setState({filteredcountriesList:x})
  }

  getCountriesWords = () =>{
    let y = countriesLists.filter(country => {
    return country.includes(this.state.inputUser)
 }) 
    this.setState({filteredCountriesWords:y})
}

  userInput = (e)=>{
  this.setState({inputUser:e.target.value})
  }
render() {
    return (
      <div className="App">
        <input type="text"  placeholder="Search Countries" onChange={this.userInput}/>
        <Header />
        <div>
          <button onClick={this.getCountriesStarts}>Search By Letter</button>
          <button onClick={this.getCountriesWords}>Search By Words</button>
          <div className="filteredCountries">{this.state.filteredcountriesList.map(filteredcountriesLis=>{return <div>{filteredcountriesLis}</div>})}</div>
          <div className="filteredCountries">{this.state.filteredCountriesWords.map(filteredCountriesWord=>{return <div>{filteredCountriesWord}</div>})}</div>
         </div>
        <div className="countriesList">
         {countriesLists.map(countriesList => {
          return <div>{countriesList}</div>
          })}
        </div>
      </div>
    );
  }
}

export default App;

