import React from 'react';
import Item from './Item';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Liste extends React.Component{

  render(){
    console.log(this.props.items);
    return (
        this.props.items.map(i =>
            <Item 
                onClick={this.props.onClick.bind(this)} 
                value={i.value} 
                id={i.key}>
            </Item>
        )
    );
  }
}

export default Liste;
