import React from "react";
import PersonDetails from "../personDetails"
import ItemList from "../itemList/itemList";
import Row from "../Row";
import ErrorBoundry from "../errorBoundry";


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
                      getData={this.props.getData}>
          {this.props.children}
        </ItemList>
      )

      const itemDetails = (
        <PersonDetails itemId={this.state.selectedItem}
                           getItem={this.props.getItem}/>
      )

      return (
        <ErrorBoundry>
          <Row left={itemList} right={itemDetails} />
        </ErrorBoundry>
      )
    }
}