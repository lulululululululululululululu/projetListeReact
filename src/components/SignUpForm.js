import React from 'react'
import * as provider from '../providers/provider';
import { Link } from "react-router-dom";

class SignUpForm extends React.Component{

    render(){
      return (
          <div className="sign-in-form flex column">
            <form className="flex column align-center">
                <input type="text"
                    placeholder="Nom d'utilisateur">
                </input>
                <input type="password"
                    placeholder="Mot de passe">
                </input>
                <input className="cta" type="submit"
                    value="Se connecter">
                </input>
            </form>
            <hr/>
            <div className="or">Vous n'avez pas de compte ?...</div>
            <hr/>
            <Link to={provider.providers.link.SIGN_UP} className="secondary-cta secondary-cta-colors link-sign-up">
                 S'inscrire
            </Link>
          </div>
      );
    }
  }
  
  export default SignUpForm;