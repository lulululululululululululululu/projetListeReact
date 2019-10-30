import React from 'react';
import Title from './components/Title';
import SignUpForm from './components/SignUpForm';
import { connect } from "react-redux";
import * as language from './providers/lang/lang';

class SignUp extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value={language.lang[this.props.lang].SIGN_UP_TITLE}/>
            <SignUpForm />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(SignUp);
