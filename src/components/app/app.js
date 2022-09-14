import React from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import './app.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: null
    }
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div> 
    );
  }
};
