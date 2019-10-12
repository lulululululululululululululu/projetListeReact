import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import _ from 'lodash';
import Moment from 'react-moment';
import 'moment-timezone';
import * as provider from './providers/provider';
import './css/list.css';
import './css/header.css';
import Liste from './Liste';
import AddToList from './AddToList';
import Header from './Header';
const moment = require('moment');

class App extends React.Component{

  constructor(props) {
    super(props);
  }
  
  

  state = {
    items: [
    ],
    errorField: false,
    searchBarHeaderOpen: false
  };

  setHeader = () => {
    return (
      <Header onClick={this.validateSearchInSearchBar} ></Header>
    )
  }

  setTitle = (title) => {
    return (
      <div className="title">
        <h1>{title}</h1>
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

  setList = (list) => {
    if(list !== 0){
      return (
        <div className="list">
          <Liste 
            onClickDelete={this.deleteItem}
            onClickModify={this.modifyItem}
            onClickShare={this.shareItem}
            onClickDeleted={this.deleteOrRestoreItem}
            onClickValidateEdit={this.validateEdit} 
            onClickCancelEdit={this.cancelEdit} 
            items={this.state.items}>
          </Liste>
        </div>
      )
    }

    return (
      this.setNoList()
    )
  }

  setAddToList = () => {
    return (
      <AddToList onClick={this.addInList} />
    )
  }

  validateSearchInSearchBar = (value) => {
    alert(value);
  }

  validateEdit = async(data) => {
    let element = $("#textarea-edit-" + data.target.dataset.item);
    let value = element.val();
    if(!this.checkField(value)){
      await this.error(element, "field");
      element.addClass("error-field");
      return;
    }
    var _state = Object.assign({}, this.state);
    _state['items'][data.target.dataset.item]["isInEdition"] = false;
    _state['items'][data.target.dataset.item]["value"] = $("#textarea-edit-" + data.target.dataset.item).val();
    this.setState(_state);
  }

  cancelEdit = (data) => {
    var _state = Object.assign({}, this.state);
    _state['items'][data.target.dataset.item]["isInEdition"] = false;
    this.setState(_state);
  }

  deleteOrRestoreItem = (data) => {
    var _state = Object.assign({}, this.state);
    _state['items'][data.target.id]["isInEdition"] = false;
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
    let regex = provider.providers.const.FIELD_REGEX_CHECK_INVALID_CARACTER;
    if(value.match(regex) || value.replace(provider.providers.const.FIELD_REGEX_CHECK_WHITE_SPACE, "") === "" || value === ""){
      return false;
    }

    return true;
  }

  modifyItem = (data) => {
    let _state = Object.assign({}, this.state);
    _state['items'][data.target.id]['isInEdition'] = true;
    this.setState(_state);
    console.log(this.state);
  }

  shareItem = (data) => {
    
  }

  error = (element, elementType, errorType = null) => {
    let _state = Object.assign({}, this.state);
    if(elementType === "field"){
      _state['errorField'] = true;
      $("#" + element.parent().attr("id") + " .error-message").html("Attention ce champ est vide ou contiens des caractères invalides")
    }
    this.setState(_state);
  }

  addInList = async() => {
    let element = $(".field-add");
    let value = element.val();
    if(!this.checkField(value)){
      await this.error(element, "field");
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
    let date = moment(new Date()).format(provider.providers.const.DATETIME_FORMAT);
    let _state = Object.assign({}, this.state);
    _state['items'].push({key: this.state.items.length, value: value, isDeleted: false, isInEdition: false, creationDate: date});
    _state['errorField'] = false;
    this.setState(_state);
    console.log(this.state);
  }
  
  render(){
    return(
      <Router>
        <div>
          {this.setHeader()}
          <div id="main-container">
            <Switch>
              <Route path={provider.providers.link.MY_LIST}>
                {this.setTitle("Ma liste")}
                <div className="block-list flex space-around">
                  {this.setAddToList()}
                  {this.setList(this.state.items.length)}
                </div>
              </Route>
              <Route path={provider.providers.link.MY_MEDIAS}>
                {this.setTitle("Mes médias")}
              </Route>
              <Route path={provider.providers.link.FRIENDS}>
                {this.setTitle("Amis")}
              </Route>
              <Route path={provider.providers.link.MESSAGES}>
                {this.setTitle("Messages")}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
