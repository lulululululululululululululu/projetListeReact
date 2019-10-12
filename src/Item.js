import React from 'react';
import * as provider from './providers/provider';
import MenuListOptions from './MenuListOptions';

class Item extends React.Component{

  render(){
    return (
      <div className="item-list flex" id={"field-menu" + this.props.id}>
        <div
          className="item" 
          value={this.props.value}
          id={this.props.id}>
            {this.props.value}
        </div>
        <MenuListOptions 
            id={this.props.id}
            onClickModify={this.props.onClickModify}
            onClickShare={this.props.onClickShare}
            onClickDelete={this.props.onClickDelete}>
        </MenuListOptions>
        <div className="creation-date-item t-right deleted">
          {this.props.date}
        </div>
      </div>
    );
  }
}

export default Item;