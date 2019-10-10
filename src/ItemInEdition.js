import React from 'react';
import * as provider from './providers/provider';
import MenuListOptions from './MenuListOptions';
import { Icon } from 'semantic-ui-react'

class ItemInEdition extends React.Component{

  render(){
    return (
      <div className="item-list flex column" id={"item-list-" + this.props.id}>
        <div className="flex" id={"field-menu" + this.props.id}>
            <textarea
            defaultValue={this.props.value}
            className="item edit-textarea"
            id={"textarea-edit-" + this.props.id}>
            </textarea>
            <MenuListOptions 
                id={this.props.id}
                onClickModify={this.props.onClickModify}
                onClickShare={this.props.onClickShare}
                onClickDelete={this.props.onClickDelete}>
            </MenuListOptions>
            <div className="error-message"></div>
        </div>
        <div className="flex justify-center">
            <button className="cta-save-cancel-liste-edit secondary-cta" 
                id="save-list-edit" 
                data-item={this.props.id} 
                onClick={this.props.onClickValidateEdit}>
                <Icon name="check" data-item={this.props.id} id="save-list-edit" className="check"></Icon>Valider
            </button>
            <button className="cta-save-cancel-liste-edit secondary-cta secondary-cta-colors" 
                id="cancel-list-edit" 
                data-item={this.props.id} 
                onClick={this.props.onClickCancelEdit}>
                Annuler
            </button>
        </div>
      </div>
    );
  }
}

export default ItemInEdition;