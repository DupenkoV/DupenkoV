import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import './personDetails.css';

export default class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      item: null,
      loading: false
    }
  }

  SwapiService = new SwapiService();

  itemRender() {
    const { getItem } = this.props;

    this.setState({loading: true})
    getItem(this.props.itemId)
      .then((item) => {
        this.setState({
          item, 
          loading: false
        })
      })
  }

  // componentDidMount() {
  //   this.personRender();
  // }
  

  componentDidUpdate(prevProps) {
    if(prevProps.itemId !== this.props.itemId) {
      this.itemRender();
    }
  }

  render() {
    const { item, loading } = this.state;

    if(!item) {
      return <span>Select a item from a list</span>
    }

    if(loading) {
      return <Spinner />
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{item.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{item.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{item.eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}