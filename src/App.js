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
          onClickDelete={this.deleteItem}
          onClickModify={this.modifyItem}
          onClickShare={this.shareItem}
          onClickDeleted={this.deleteOrRestoreItem} 
          items={this.state.items}>
        </Liste>
      </div>
    )
  }

  setAddToList = () => {
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
          onClick={this.addInList}/>
      </div>
    )
  }

  deleteOrRestoreItem = (data) => {
    var _state = Object.assign({}, this.state);
    switch(data.target.dataset.type){
      case "delete":
        _state['items'].splice(data.target.id, 1);
        _.forEach(_state['items'], function(value, key){
          _state['items'][key]["key"] = key;
        })
        this.setState(_state);
        break;
      case "restore":
        _state['items'][data.target.id]["isDeleted"] = false;
        this.setState(_state);
        break;
      default:
        console.log("error");
        break;
    }
  }

  deleteItem = async(data) => {
    let _state = Object.assign({}, this.state);
    _state['items'][data.target.id]['isDeleted'] = true;
    await this.setState(_state);
  }

  checkField = (value) => {
    let regex = /((<script>)|(<\/script>))/g;
    if(value.match(regex)){
      return false;
    }

    return true;
  }

  modifyItem = (data) => {

  }

  shareItem = (data) => {
    
  }

  error = (element, elementType, errorType) => {
    let _state = Object.assign({}, this.state);
    if(elementType === "field"){
      _state['errorField'] = true;
      if(errorType === "empty"){
       $("#" + element.parent().attr("id") + " .error-message").html("Ce champ ne doit pas être vide")
      }else if(errorType = "invalid"){
        $("#" + element.parent().attr("id") + " .error-message").html("Ce champ contient des caractères invalides")
      }
    }
    this.setState(_state);
  }

  addInList = async() => {
    let element = $(".field-add");
    let value = element.val();
    if(value === ""){
      await this.error(element, "field", "empty");
    }else if(!this.checkField(value)){
      await this.error(element, "field", "invalid");
    }else{
      $("#" + element.parent().attr("id") + " .error-message").html("");
      element.removeClass("field-error");
      let _state = Object.assign({}, this.state);
      _state["errorField"] = false;
      await this.setState(_state);
    }
    if(this.state["errorField"]){
      element.addClass("error-field");
      return;
    }else{
      element.removeClass("error-field");
    }
    let _state = Object.assign({}, this.state);
    _state['items'].push({key: this.state.items.length, value: value, isDeleted: false});
    _state['errorField'] = false;
    this.setState(_state);
  }
  
  render(){
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
