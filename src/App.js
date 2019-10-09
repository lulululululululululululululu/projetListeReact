import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './css/list.css';
import Liste from './Liste';

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  state = {
    items: [
    ],
    errorField: false
  };

  setTitle = () => {
    return (
      <div className="title">
        <h1>Ma liste</h1>
      </div>
    )
  }

  setNoList = () => {
    return (
      <div className="no-list">
        <h2>Votre liste est vide</h2>
      </div>
    )
  }

  setList = () => {
    return (
      <div className="list">
        <Liste 
          onClick={this.validateItem} 
          items={this.state.items}>
        </Liste>
      </div>
    )
  }

  setAddToList = () => {
    return (
      <div className="add flex column align-center">
        <input
          type="text"
          className="field-add field"
          placeholder="Que voulez vous ajouter à la liste ?">
        </input>
        <input 
          type="button"
          className="cta"
          value="Ajouter"
          onClick={this.addInList}>
        </input>
      </div>
    )
  }

  validateItem = (data) => {
    console.log(data.target.id);
    this.state.items[data.target.id].checked ? $("#" + data.target.id).removeClass("removed") : $("#" + data.target.id).addClass("removed") 
    let _state = Object.assign({}, this.state);
    _state['items'][data.target.id]['checked'] = !this.state.items[data.target.id].checked;
    this.setState(_state)
  }

  checkField = (value) => {
    let regex = "";
    if(value.match(regex)){
      return false;
    }

    return true;
  }

  error = (element, elementType, errorType) => {
    if(elementType === "field"){
      let _state = Object.assign({}, this.state);
      console.log(_state);
      _state['errorField'] = true;
      this.setState(_state);
      if(errorType === "empty"){
        
      }
    }
  }

  addInList = () => {
    let element = $(".field-add");
    let value = element.val();
    if(value === ""){
      this.error(element, "field", "empty");
    }else if(!this.checkField(value)){
      this.error(element, "field", "invalid");
    }

    if(this.state["errorField"]){
      element.addClass("error-field");
      return;
    }else{
      element.removeClass("errorField");
    }

    let _state = Object.assign({}, this.state);
    console.log(_state);
    _state['items'].push({key: this.state.items.length, value: value, checked: false});
    _state['errorField'] = false;
    this.setState(_state);
  }
  
  render(){
    console.log(this.state.items);
    if(this.state.items.length === 0){
      return(
        <div>
          {this.setTitle()}
          <div className="block-list flex space-around">
            {this.setAddToList()}
            {this.setNoList()}
          </div>
        </div>
      )
    }else{
      return (
        <div>
          {this.setTitle()}
          <div className="bloc-list flex space-around">
            {this.setAddToList()}
            {this.setList()}
          </div>
        </div>
      );
    }
  }
}

export default App;
