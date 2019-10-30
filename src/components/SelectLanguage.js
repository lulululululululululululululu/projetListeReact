import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react';
import { providers } from '../providers/provider';

class SelectLanguage extends React.Component{

    changeLanguage = async(event, value) => {
        if(value.value === 'Français'){
            var langValue = "fr";
        }else{
            var langValue = "en";
        }
        console.log(value.value)
        await this.props.dispatch({
            type: providers.redux.LANG,
            lang: langValue
        });
        await this.props.dispatch({
            type: providers.redux.REDIRECT,
            redirect: true
        });
    }

    languageOptions = [
        { key: 'Français', text: 'Français', flag: 'france', value: 'Français' },
        { key: 'English', text: 'English', flag: 'us', value: 'English' }
    ]

  render(){
    if(this.props.redirect){
        this.props.dispatch({
            type: providers.redux.REDIRECT,
            redirect: false
        });
        let changedLanguagePath = window.location.pathname.split('/');
        changedLanguagePath[1] = this.props.lang;
        changedLanguagePath = changedLanguagePath.join('/');
        window.location = changedLanguagePath;
    }

    if(this.props.lang === 'fr'){
        var langValue = "Français";
    }else{
        var langValue = "English";
    }
    return(
        <Menu compact className="box-select-language">
            <Dropdown
                options={this.languageOptions} 
                defaultValue={langValue} 
                simple
                onChange={this.changeLanguage}
                item />
        </Menu>
    )
  }
}

function mapStateToProps(state) {
    return {
      lang: state.mainReducers.lang,
      redirect: state.mainReducers.redirect
    }
  }
  
  export default connect(mapStateToProps)(SelectLanguage);
