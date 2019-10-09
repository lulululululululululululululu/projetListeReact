import React from 'react';
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
          className="item-options"
          id={this.props.id}>
          <Button.Content visible id={this.props.id}><Icon name='ellipsis horizontal' id={this.props.id}/></Button.Content>
          <Button.Content hidden id={this.props.id}>
            <button className="cta-option-item" title="Modifier" onClick={this.props.onClickModify}>
              <Icon name='pencil' id={this.props.id} />
            </button>
            <button className="cta-option-item" title="Partager" onClick={this.props.onClickShare}>
              <Icon name='share' id={this.props.id}/>
            </button>
            <button className="cta-option-item" title="Supprimer" onClick={this.props.onClickDelete}>
              <Icon name='trash alternate outline' id={this.props.id}/>
            </button>
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default Item;