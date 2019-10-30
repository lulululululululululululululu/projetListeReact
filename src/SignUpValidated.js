import React from 'react';
import * as provider from './providers/provider';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as language from './providers/lang/lang';

class SignUpValidated extends React.Component{

    render(){
      return (
        <div className="block-validated-account flex column align-center">
            <div className="account-validated-text">
                {language.lang[this.props.lang].THANKS_FOR_SIGN_UP_MESSAGE}
            </div>
            <Link to={provider.providers.link.SIGN_IN} className="cta">
                Se connecter
            </Link>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      lang: state.mainReducers.lang
    }
  }
  
  export default connect(mapStateToProps)(SignUpValidated);