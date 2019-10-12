import React from 'react';
import * as provider from './providers/provider';

class DeletedItem extends React.Component{

  render(){
    return (
      <div className="bloc-deleted-item flex column">
        <div className="deleted-message-value t-center deleted">
          ({this.props.value})
        </div>
        <div className="creation-date-item-deleted t-center deleted">
          {this.props.date}
        </div>
        <div className="item-list flex justify-center">
          <input
              type="button"
              className="cta-restore-delete-item"
              id={this.props.id}
              value="Supprimer"
              data-type="delete"
              onClick={this.props.onClick}
          />
          <input
              type="button"
              className="cta-restore-delete-item"
              id={this.props.id}
              value="Restorer"
              data-type="restore"
              onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

export default DeletedItem;