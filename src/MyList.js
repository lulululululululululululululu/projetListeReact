import React from 'react';
import * as provider from './providers/provider';
import $ from 'jquery';
import _ from 'lodash';
import Title from './components/Title';
import AddToList from './components/AddToList';
import Liste from './components/Liste';
import 'moment-timezone';
import { connect } from "react-redux";
const moment = require('moment');

class MyList extends React.Component {

  setNoList = () => {
    return (
      <div className="no-list">
        <h2>Votre liste est vide</h2>
      </div>
    )
  }

  validateEdit = async (data) => {
    let element = $("#textarea-edit-" + data.target.dataset.item);
    let value = element.val();
    if (!this.checkField(value)) {
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
    switch (data.target.dataset.type) {
      case "delete":
        _state['items'].splice(data.target.id, 1);
        _.forEach(_state['items'], function (value, key) {
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

  deleteItem = async (data) => {
    let _state = Object.assign({}, this.state);
    _state['items'][data.target.id]['isDeleted'] = true;
    await this.setState(_state);
  }

  checkField = (value) => {
    let regex = provider.providers.const.FIELD_REGEX_CHECK_INVALID_CARACTER;
    if (value.match(regex) || value.replace(provider.providers.const.FIELD_REGEX_CHECK_WHITE_SPACE, "") === "" || value === "") {
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

  error = async(element, elementType, errorType = null) => {
    if (elementType === "field") {
      await this.props.dispatch({
        type: provider.providers.redux.ERROR_FIELD_TRUE,
        errorField: true
      })
      console.log(this.props.errorField)
      $("#" + element.parent().attr("id") + " .error-message").html("Attention ce champ est vide ou contiens des caractères invalides")
    }
  }

  setList = (list) => {
    if (list !== 0) {
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

  addInList = async () => {
    console.log("aaaaa = " + this.props.store);
    let element = $(".field-add");
    let value = element.val();
    if (!this.checkField(value)) {
      await this.error(element, "field");
    } else {
      $("#" + element.parent().attr("id") + " .error-message").html("");
      element.removeClass("field-error");
      await this.props.dispatch({
        type: provider.providers.redux.ERROR_FIELD_FALSE,
        errorField: false
      })
      console.log(this.props.errorField)
    }
    if (this.props.errorField) {
      element.addClass("error-field");
      return;
    } else {
      element.removeClass("error-field");
    }
    let date = moment(new Date()).format(provider.providers.const.DATETIME_FORMAT);
    /*let _state = Object.assign({}, this.state);
    _state['items'].push({ key: this.state.items.length, value: value, isDeleted: false, isInEdition: false, creationDate: date });
    _state['errorField'] = false;
    this.setState(_state);*/
  }

  render() {
    return (
      <div id="main-container">
        <Title value="Ma liste" />
        <div className="block-list flex space-around">
          <AddToList onClick={this.addInList} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorField: state.errorField
  }
}

export default connect(mapStateToProps)(MyList);