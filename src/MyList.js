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
    let id = data.target.dataset.item;
    if (!this.checkField(value)) {
      await this.error(element, "field");
      element.addClass("error-field");
      return;
    }
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_TYPE_EDITION,
      itemIndex: id,
      isInEdition: false
    })
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_VALUE,
      itemIndex: id,
      itemValue: $("#textarea-edit-" + id).val()
    })
    this.forceUpdate();
  }

  cancelEdit = async(data) => {
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_TYPE_EDITION,
      itemIndex: data.target.dataset.item,
      isInEdition: false
    })
    this.forceUpdate();
  }

  deleteOrRestoreItem = async(data) => {
    let type = data.target.dataset.type;
    let id = data.target.id
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_TYPE_EDITION,
      itemIndex: data.target.id,
      isInEdition: false
    })
    switch (type) {
      case "delete":
        await this.props.dispatch({
          type: provider.providers.redux.SPLICE_LIST,
          itemId: id
        })
        this.forceUpdate();
        break;
      case "restore":
        await this.props.dispatch({
          type: provider.providers.redux.CHANGE_ITEM_IS_DELETED,
          isDeletedValue: false,
          itemIndex: id
        })
        this.forceUpdate();
        break;
      default:
        console.log("error");
        break;
    }
  }

  deleteItem = async (data) => {
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_IS_DELETED,
      isDeletedValue: true,
      itemIndex: data.target.id
    })
    this.forceUpdate();
  }

  checkField = (value) => {
    let regex = provider.providers.const.FIELD_REGEX_CHECK_INVALID_CARACTER;
    if (value.match(regex) || value.replace(provider.providers.const.FIELD_REGEX_CHECK_WHITE_SPACE, "") === "" || value === "") {
      return false;
    }

    return true;
  }

  modifyItem = async(data) => {
    await this.props.dispatch({
      type: provider.providers.redux.CHANGE_ITEM_TYPE_EDITION,
      itemIndex: data.target.id,
      isInEdition: true
    })
    this.forceUpdate()
  }

  shareItem = (data) => {

  }

  error = async(element, elementType, errorType = null) => {
    if (elementType === "field") {
      await this.props.dispatch({
        type: provider.providers.redux.ERROR_FIELD,
        errorField: true
      })
      $("#" + element.parent().attr("id") + " .error-message").html("Attention ce champ est vide ou contiens des caractères invalides")
    }
  }

  setList = () => {
    if (this.props.items.length !== 0) {
      return (
        <div className="list">
          <Liste
            onClickDelete={this.deleteItem}
            onClickModify={this.modifyItem}
            onClickShare={this.shareItem}
            onClickDeleted={this.deleteOrRestoreItem}
            onClickValidateEdit={this.validateEdit}
            onClickCancelEdit={this.cancelEdit}
            items={this.props.items}>
          </Liste>
        </div>
      )
    }

    return (
      this.setNoList()
    )
  }

  addInList = async () => {
    let element = $(".field-add");
    let value = element.val();
    if (!this.checkField(value)) {
      await this.error(element, "field");
    } else {
      $("#" + element.parent().attr("id") + " .error-message").html("");
      element.removeClass("field-error");
      await this.props.dispatch({
        type: provider.providers.redux.ERROR_FIELD,
        errorField: false
      })
    }
    if (this.props.errorField) {
      element.addClass("error-field");
      return;
    } else {
      element.removeClass("error-field");
    }
    let date = moment(new Date()).format(provider.providers.const.DATETIME_FORMAT);
    let newItem = this.props.items;
    newItem.push({ key: newItem.length, value: value, isDeleted: false, isInEdition: false, creationDate: date })
    await this.props.dispatch({
      type: provider.providers.redux.ADD_IN_LIST,
      items: newItem
    })
    this.forceUpdate()
  }

  render() {
    return (
      <div id="main-container">
        <Title value="Ma liste" />
        <div className="block-list flex space-around">
          <AddToList onClick={this.addInList} />
          {this.setList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorField: state.errorField,
    items: state.items
  }
}

export default connect(mapStateToProps)(MyList);