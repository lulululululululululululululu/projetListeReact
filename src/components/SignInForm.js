import React from 'react';
import * as provider from '../providers/provider';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as language from '../providers/lang/lang';

class SignInForm extends React.Component{

    render(){
      return (
          <div className="sign-in-up-form flex column">
            <form className="flex column align-center" id="form-sign-in">
                <input type="text"
                    placeholder={language.lang[this.props.lang].USERNAME}>
                </input>
                <input type="password"
                    placeholder={language.lang[this.props.lang].PASSWORD}>
                </input>
                <input className="cta" type="submit"
                    value={language.lang[this.props.lang].CONNECTION}>
                </input>
            </form>
            <hr/>
            <div className="or">{language.lang[this.props.lang].NOT_SIGN_UP_ALREADY}</div>
            <hr/>
            <Link to={provider.providers.link.SIGN_UP} className="secondary-cta secondary-cta-colors link-sign-up">
              {language.lang[this.props.lang].SIGN_UP}
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
  
  export default connect(mapStateToProps)(SignInForm);