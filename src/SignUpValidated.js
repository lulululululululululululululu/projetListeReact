import React from 'react';
import * as provider from './providers/provider';
import { Link } from "react-router-dom";

class SignUpValidated extends React.Component{

    render(){
      return (
        <div className="block-validated-account flex column align-center">
            <div className="account-validated-text">
                Merci de votre inscription !<br/>
                Votre compte a bien été validé, vous pouvez à présent vous connecter.
            </div>
            <Link to={provider.providers.link.SIGN_IN} className="cta">
                Se connecter
            </Link>
        </div>
      );
    }
  }
  
  export default SignUpValidated;