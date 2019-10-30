import * as provider from '../../providers/provider';
import _ from 'lodash';

const initialState = {
    lang: 'fr',
    redirect: false
};

export default function mainReducers(state = initialState, action) {
    switch (action.type) {
      case provider.providers.redux.LANG:
        return {
          ...state,
            lang: action.lang
        }
      case provider.providers.redux.REDIRECT:
        return {
            ...state,
             redirect: action.redirect
        }
      default:
        return state;
    }
}