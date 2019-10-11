import React from 'react';
import * as provider from './providers/provider';
import Moment from 'react-moment';
import 'moment-timezone';
import Item from './Item';
import DeletedItem from './DeletedItem';
import ItemInEdition from './ItemInEdition';

class Liste extends React.Component{

  render(){
    return (
        this.props.items.map(i =>
          {if (!i.isDeleted && !i.isInEdition) {
            return (
              <Item 
                onClickDelete={this.props.onClickDelete.bind(this)} 
                onClickModify={this.props.onClickModify.bind(this)}
                onClickShare={this.props.onClickShare.bind(this)}
                value={i.value} 
                id={i.key}
                date={this.props.date}>
              </Item>
            )
          }else if(!i.isDeleted && i.isInEdition){
            return (
              <ItemInEdition 
                onClickDelete={this.props.onClickDelete.bind(this)} 
                onClickModify={this.props.onClickModify.bind(this)}
                onClickShare={this.props.onClickShare.bind(this)}
                onClickValidateEdit={this.props.onClickValidateEdit.bind(this)}
                onClickCancelEdit={this.props.onClickCancelEdit.bind(this)}
                value={i.value} 
                id={i.key}>
              </ItemInEdition>
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
