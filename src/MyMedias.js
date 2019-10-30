import React from 'react';
import Title from './components/Title';
import { connect } from "react-redux";
import * as language from './providers/lang/lang';

class MyMedias extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value={language.lang[this.props.lang].MY_MEDIAS_TITLE}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(MyMedias);
