import React from "react";
import PersonDetails from "../personDetails"
import ItemList from "../itemList/itemList";
import Row from "../Row";



export default class ItemPage extends React.Component {
    constructor() {
        super();

        this.state = {
          selectedItem: null
        }
    }

    onItemSelected = (id) => {
      this.setState({
        selectedItem: id
      })
    }
    
    
    render() {
      const itemList = (
        <ItemList onItemSelected={this.onItemSelected}
                      getData={this.props.getData}
                      renderItem={this.props.renderItem}/>
      )

      const itemDetails = (
        <PersonDetails itemId={this.state.selectedItem}
                           getItem={this.props.getItem}/>
      )

      return (
        <Row left={itemList} right={itemDetails} />
      )
    }
}