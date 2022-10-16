import React from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PeoplePage from '../peoplePage';
import SwapiService from '../../services/SwapiService';

import './app.css';

export default class App extends React.Component {
  constructor() {
    super();


  }

  SwapiService = new SwapiService();


  render() {


    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.SwapiService.getAllPeople}
                    getItem={this.SwapiService.getPerson}>
          {(i) => `${i.name} (gender: ${i.gender})`}
        </ PeoplePage>
        <PeoplePage getData={this.SwapiService.getAllPlanets}
                    getItem={this.SwapiService.getPlanet}>
          {(i) => `${i.name} (diametr: ${i.diametr})`}
        </ PeoplePage>
      </div> 
    );
  }
};
