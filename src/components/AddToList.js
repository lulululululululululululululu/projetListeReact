import React from 'react';
import { connect } from "react-redux";
import * as language from '../providers/lang/lang';

class AddToList extends React.Component{

  render(){
    return (
        <div className="add flex column align-center" id="block-add-to-list">
            <textarea
              type="text"
              className="field-add field"
              placeholder={language.lang[this.props.lang].PLACEHOLDER_ADD_TO_LIST}>
            </textarea>
            <div className="error-message"></div>
            <input 
              type="button"
              className="cta"
              value={language.lang[this.props.lang].ADD}
              onClick={this.props.onClick}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(AddToList);
