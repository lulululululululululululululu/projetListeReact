import React from 'react';
import Title from './components/Title';
import SignInForm from './components/SignInForm';

class SignIn extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value="Connexion"/>
            <SignInForm />
        </div>
    )
  }
}

export default SignIn;
