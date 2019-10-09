import React from 'react';

class DeletedItem extends React.Component{

  render(){
    return (
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
    );
  }
}

export default DeletedItem;