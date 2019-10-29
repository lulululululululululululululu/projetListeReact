import React from 'react'
import * as provider from '../providers/provider';
import { Link, Redirect } from "react-router-dom";
import $ from 'jquery';
import { connect } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader } from 'semantic-ui-react';

class SignUpForm extends React.Component{

    setErrorUserAlreadyExists = () => {
        if(this.props.errors.includes("userAlreadyExists")){
            return(
                <div className="enclosing-tag">
                    <div className="error-message">
                        Cet utilisateur existe déja
                    </div>
                </div>
            )
        }

        return;
    }

    setUsername = () => {
        if(this.props.errors.includes("invalidUsername")){
            return(
                <div className="enclosing-tag">
                    <input type="text"
                        id="username"
                        value={this.props.username}
                        placeholder="Nom d'utilisateur"
                        className="error-field"
                        onChange={this.onChangeState}>
                    </input>
                    <div className="error-message">
                        Le nom d'utilisateur est incorrect. 
                        Il ne doit pas contenir de caractères spéciaux et doit faire en 2 et 50 caractères.
                    </div>
                </div>
            )
        }

        return(
            <input type="text"
                id="username"
                value={this.props.username}
                placeholder="Nom d'utilisateur"
                onChange={this.onChangeState}>
            </input>
        )
    }

    setMail = () => {
        if(this.props.errors.includes("invalidMail")){
            return(
                <div className="enclosing-tag">
                    <input type="mail"
                        id="mail"
                        value={this.props.mail}
                        placeholder="E-mail"
                        className="error-field"
                        onChange={this.onChangeState}>
                    </input>
                    <div className="error-message">
                        Le mail est incorrect. 
                        Il doit faire moins de 100 caractères.
                    </div>
                </div>
            )
        }

        return(
            <input type="mail"
                id="mail"
                value={this.props.mail}
                placeholder="E-mail"
                onChange={this.onChangeState}>
            </input>
        )
    }

    setPassword = () => {
        if(this.props.errors.includes("invalidPassword")){
            return(
                <div className="enclosing-tag">
                    <input type="password"
                        id="password"
                        className="error-field"
                        value={this.props.password}
                        placeholder="Mot de passe"
                        onChange={this.onChangeState}>
                    </input>
                    <div className="error-message">
                        Le mot de passe n'est pas valide. Il doit :<br />
                        - faire au moins 7 caractères<br />
                        - contenir au moins une majuscule<br />
                        - contenir au moins un numéro<br />
                    </div>
                </div>
            )
        }

        return(
            <input type="password"
                id="password"
                value={this.props.password}
                placeholder="Mot de passe"
                onChange={this.onChangeState}>
            </input>
        )
    }

    setConfirmPassword = () => {
        if(this.props.errors.includes("invalidSamePasswords")){
            return(
                <div className="enclosing-tag">
                    <input type="password"
                        id="confirm-password"
                        value={this.props.confirmPassword}
                        className="error-field"
                        placeholder="Confirmer le mot de passe"
                        onChange={this.onChangeState}>
                    </input>
                    <div className="error-message">
                        Les deux mots de passe ne sont pas identiques
                    </div>
                </div>
            )
        }

        return(
            <input type="password"
                id="confirm-password"
                value={this.props.confirmPassword}
                placeholder="Confirmer le mot de passe"
                onChange={this.onChangeState}>
            </input>
        )
    }

    setSubmitCta = () => {
        let isLoading = this.props.onLoad;

        if(isLoading){
            return(
                <button className="cta" type="submit" disabled="disabled">
                    <Loader size="tiny" active inline />
                </button>
            );
        }

        return(
            <button className="cta" type="submit">
                S'inscrire
            </button>
        );
    }

    onChangeState = async() => {
        await this.props.dispatch({
            type: provider.providers.redux.SET_USER_CREDENTIALS_SIGN_UP,
            username: $("#username").val(),
            mail: $("#mail").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirm-password").val()
        })
    }

    checkCaptcha = (value) => {
        $.ajax({
            url: provider.providers.link.CAPTCHA_CHECK,
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", provider.providers.const.SITE_PATH);
            },
            data: {
                secret: provider.providers.const.CAPTCHA_SITE_KEY,
                response: value
            },
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

    redirect = () => {
        
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        await this.props.dispatch({
            type: provider.providers.redux.CHANGE_ONLOAD_STATUS_SIGN_UP,
            onLoad: true
        })
        //this.forceUpdate();
        let datas = new FormData();
        datas.append("parameters", JSON.stringify(this.props));
        await fetch(provider.providers.const.API_PATH + provider.providers.submit.SIGN_UP,
        {
            method: "POST",
            body: datas
        }).then(response => response.json())
        .then(async data => {
            let json = JSON.parse(data);
            await this.props.dispatch({
                type: provider.providers.redux.SET_ERRORS_SIGN_UP,
                errors: json.errors
            })
            if(this.props.errors.length === 0){
                await this.props.dispatch({
                    type: provider.providers.redux.REDIRECT_SIGN_UP,
                    redirect: true
                })
            }
        }).catch(function(error){
            console.log(error);
            //await this.setState({error: true})
        });
        await this.props.dispatch({
            type: provider.providers.redux.CHANGE_ONLOAD_STATUS_SIGN_UP,
            onLoad: false
        })
    }

    render(){
        if(this.props.redirect){
            this.props.dispatch({
                type: provider.providers.redux.REDIRECT_SIGN_UP,
                redirect: false
            })
            return <Redirect to={provider.providers.link.SIGN_IN} />
        }
      return (
          <div className="sign-in-up-form flex column">
            <form method="post" className="flex column align-center" id="form-sign-up" onSubmit={this.handleSubmit}>
                {this.setErrorUserAlreadyExists()}
                {this.setUsername()}
                {this.setMail()}
                {this.setPassword()}
                {this.setConfirmPassword()}
                <ReCAPTCHA
                    sitekey={provider.providers.const.CAPTCHA_SITE_KEY}
                    onChange={this.checkCaptcha}
                />
                {this.setSubmitCta()}
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

  function mapStateToProps(state) {
    return {
        mail: state.signUpReducers.mail,
        username: state.signUpReducers.username,
        password: state.signUpReducers.password,
        confirmPassword: state.signUpReducers.confirmPassword,
        onLoad: state.signUpReducers.onLoad,
        errors: state.signUpReducers.errors
    }
  }
  
  export default connect(mapStateToProps)(SignUpForm);