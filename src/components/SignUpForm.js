import React from 'react'
import * as provider from '../providers/provider';
import { Link } from "react-router-dom";
import $ from 'jquery';

class SignUpForm extends React.Component{

    state = {
        mail: "",
        username: "",
        password: "",
        confirmPassword: "",
        keepConnected: false,
        error: false
    }

    onChangeState = () => {
        this.setState({
            username: $("#username").val(),
            mail: $("#mail").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirm-password").val()
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        await $.ajax({
            url: provider.providers.const.API_PATH + provider.providers.submit.SIGN_UP,
            type: "POST",
            data: this.state,
            success: async function(data){
                console.log(data);
                //await this.setState({error: false})
            },
            error: async function(data){
                console.log(data);
                //await this.setState({error: true})
            }
        });
    }

    render(){
      return (
          <div className="sign-in-up-form flex column">
            <form method="post" className="flex column align-center" id="form-sign-up" onSubmit={this.handleSubmit}>
                <input type="text"
                    id="username"
                    placeholder="Nom d'utilisateur"
                    onChange={this.onChangeState}>
                </input>
                <input type="mail"
                    id="mail"
                    placeholder="E-mail"
                    onChange={this.onChangeState}>
                </input>
                <input type="password"
                    id="password"
                    placeholder="Mot de passe"
                    onChange={this.onChangeState}>
                </input>
                <input type="password"
                    id="confirm-password"
                    placeholder="Confirmer le mot de passe"
                    onChange={this.onChangeState}>
                </input>
                <input className="cta" type="submit"
                    value="S'inscrire">
                </input>
            </form>
            <hr/>
            <div className="or">Vous avez déja un compte ?...</div>
            <hr/>
            <Link to={provider.providers.link.SIGN_IN} className="secondary-cta secondary-cta-colors link-sign-up">
                 Se connecter
            </Link>
          </div>
      );
    }
  }
  
  export default SignUpForm;