import React from 'react';
import * as provider from './providers/provider';
import { Icon, Button } from 'semantic-ui-react';

class Header extends React.Component{

  render(){
    console.log(provider);
    return (
        <div className="header">
            <div className="header-container flex space-between">
                <a href={provider.providers.const.HOME_PATH} className="href-logo" >
                    <div className="logo" style={{backgroundImage: 'url(' + provider.providers.const.LOGO_PATH + ')'}}></div>
                </a>
                <div className="header-menu flex align-center">
                    <button className="cta-search" onClick={this.props.onClick}>
                        <Icon name="search"></Icon>
                    </button>
                    <a href={provider.providers.link.MY_LIST} className="link-menu-header">
                        Ma liste
                    </a>
                    <a href={provider.providers.link.MY_MEDIAS} className="link-menu-header">
                        Mes médias
                    </a>
                    <a href={provider.providers.link.FRIENDS} className="link-menu-header">
                        Amis
                    </a>
                    <a href={provider.providers.link.MESSAGES} className="link-menu-header">
                        Messagerie
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
