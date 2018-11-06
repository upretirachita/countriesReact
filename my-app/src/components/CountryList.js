import React from 'react';

class CountryList extends React.Component {
    state = {
        name:['Rachita','1bc']
        }
        changeName = () => {
          const name = this.state.name;
          this.setState ({
          name: ['Upreti','12']
          });
        }
    render() {
      return (
        <div>
          <h2>Hello, {this.state.name.map(name => {
             return <span>{this.name}</span>
          })}</h2>
          <button onClick={this.changeName}>Change name</button>
        </div>
      );
    }
  }
export default CountryList;