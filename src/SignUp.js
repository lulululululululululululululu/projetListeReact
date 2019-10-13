import React from 'react';
import Title from './components/Title';
import SignUpForm from './components/SignUpForm';

class SignUp extends React.Component{

  render(){
    return (
        <div id="main-container">
            <Title value="Inscription"/>
            <SignUpForm />
        </div>
    )
  }
}

export default SignUp;
