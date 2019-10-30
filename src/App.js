import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import _ from 'lodash';
import { AnimatedSwitch, spring} from 'react-router-transition';
import 'moment-timezone';
import * as provider from './providers/provider';
import './css/index.css';
import Header from './components/Header';

class App extends React.Component{

  constructor(props) {
    super(props);
    let language = window.location.pathname.split('/')[1];
    document.cookie = "language=" + language + "";
    this.props.dispatch({
      type: provider.providers.redux.LANG,
      lang: language
    })
  }

  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 1.1,
    },
    atLeave: {
      opacity: this.bounce(0),
      scale: this.bounce(0.9),
    },
    atActive: {
      opacity: this.bounce(1),
      scale: this.bounce(1),
    },
  };

  bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  
  render(){
    return(
      <Router>
        <Header onClick={this.validateSearchInSearchBar} />
        <div id="main-container">
          <AnimatedSwitch
            atEnter={this.bounceTransition.atEnter}
            atLeave={this.bounceTransition.atLeave}
            atActive={this.bounceTransition.atActive}
            mapStyles={this.mapStyles}
            className="switch-wrapper">
            {provider.providers.routes.map(({ path, Component }) => (
              <Route path={'/' + provider.providers.lang + path} key={path} >
                <Component />
              </Route>
            ))}
          </AnimatedSwitch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.mainReducers.lang
  }
}

export default connect(mapStateToProps)(App);
