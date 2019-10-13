import React from 'react';
import * as provider from '../providers/provider';

class AddToList extends React.Component{

  render(){
    return (
        <div className="add flex column align-center" id="block-add-to-list">
            <textarea
            type="text"
            className="field-add field"
            placeholder="Que voulez vous ajouter à la liste ?">
            </textarea>
            <div className="error-message"></div>
            <input 
            type="button"
            className="cta"
            value="Ajouter"
            onClick={this.props.onClick}/>
        </div>
    );
  }
}

export default AddToList;
