import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import './itemList.css';

export default class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      peopleList: null
    }
  }

  SwapiService = new SwapiService()

  componentDidMount() {
    this.SwapiService.getAllPeople()
        .then((peopleList) => {
          this.setState({
            peopleList
          })
        })
  }

  renderItems(arr)  {
    return arr.map(({id, name}) => {
      return (
        <li className='list-group-item'
            key={id}
            onClick={() => {this.props.onPersonSelected(id)}}>
          {name}
        </li>
      )
    })
  } 

  render() {
    const { peopleList } = this.state;
    
    if(!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList)
    return (
      <ul className="item-list list-group">
        { items }
      </ul>
    );
  }
}