import React from 'react';
import Title from './components/Title';
import { connect } from "react-redux";
import * as language from './providers/lang/lang';

class Friends extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value={language.lang[this.props.lang].FRIENDS_TITLE}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(Friends);
