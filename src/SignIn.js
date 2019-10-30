import React from 'react';
import Title from './components/Title';
import SignInForm from './components/SignInForm';
import { connect } from "react-redux";
import * as language from './providers/lang/lang';

class SignIn extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value={language.lang[this.props.lang].SIGN_IN_TITLE}/>
            <SignInForm />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(SignIn);
