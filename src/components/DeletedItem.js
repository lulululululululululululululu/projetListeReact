import React from 'react';
import { connect } from "react-redux";
import * as language from '../providers/lang/lang';

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
              value={language.lang[this.props.lang].DELETE}
              data-type="delete"
              onClick={this.props.onClick}
          />
          <input
              type="button"
              className="cta-restore-delete-item"
              id={this.props.id}
              value={language.lang[this.props.lang].RESTORE}
              data-type="restore"
              onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(DeletedItem);