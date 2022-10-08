import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import './personDetails.css';

export default class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: null,
      loading: false
    }
  }

  SwapiService = new SwapiService();

  personRender() {
    this.setState({loading: true})
    this.SwapiService.getPerson(this.props.personId)
      .then((person) => {
        this.setState({
          person, 
          loading: false
        })
      })
  }

  // componentDidMount() {
  //   this.personRender();
  // }
  

  componentDidUpdate(prevProps) {
    if(prevProps.personId !== this.props.personId) {
      this.personRender();
    }
  }

  render() {
    const { person, loading } = this.state;

    if(!person) {
      return <span>Select a person from a list</span>
    }

    if(loading) {
      return <Spinner />
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} />

        <div className="card-body">
          <h4>{person.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{person.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{person.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{person.eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}