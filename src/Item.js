import React from 'react';
import _ from 'lodash';
import { Button, Icon } from 'semantic-ui-react'

class Item extends React.Component{

  render(){
    return (
      <div className="item-list flex">
        <div
          className="item" 
          value={this.props.value}
          id={this.props.id}>
            {this.props.value}
        </div>
        <Button animated='vertical'
          className="delete-item"
          id={this.props.id}
          onClick={this.props.onClick}
          title="Supprimer l'élément">
          <Button.Content visible id={this.props.id}><Icon name='ellipsis horizontal' id={this.props.id}/></Button.Content>
          <Button.Content hidden id={this.props.id}><Icon name='trash alternate outline' id={this.props.id}/></Button.Content>
        </Button>
      </div>
    );
  }
}

export default Item;