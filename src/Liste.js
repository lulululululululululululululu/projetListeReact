import React from 'react';
import Item from './Item';
import DeletedItem from './DeletedItem';

class Liste extends React.Component{

  render(){
    return (
        this.props.items.map(i =>
          {if (!i.isDeleted) {
            return (
              <Item 
                onClickDelete={this.props.onClickDelete.bind(this)} 
                onClickModify={this.props.onClickModify.bind(this)}
                onClickShare={this.props.onClickShare.bind(this)}
                value={i.value} 
                id={i.key}>
              </Item>
            )
          }else{
            return (
              <DeletedItem
                onClick={this.props.onClickDeleted.bind(this)}
                id={i.key}>
              </DeletedItem>
            )
          }}
        )
    );
  }
}

export default Liste;
