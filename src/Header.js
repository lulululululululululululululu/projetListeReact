import React from 'react';
import { Link } from "react-router-dom";
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
                    <div className="bloc-search-bar-header flex" id="bloc-search-bar">
                        <input type="text" className="search-bar" id="search-bar-header" placeholder="Rechercher..."></input>
                        <button className="cta-search" id="cta-search-header" onClick={this.props.onClick}>
                            <Icon name="search"></Icon>
                        </button>
                    </div>
                    <Link to={provider.providers.link.MY_LIST} className="link-menu-header">
                        Ma liste
                    </Link>
                    <Link to={provider.providers.link.MY_MEDIAS} className="link-menu-header">
                        Mes médias
                    </Link>
                    <Link to={provider.providers.link.FRIENDS} className="link-menu-header">
                        Amis
                    </Link>
                    <Link to={provider.providers.link.MESSAGES} className="link-menu-header">
                        Messagerie
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
