import * as provider from '../../providers/provider';

const initialState = {
    items: [
    ],
    errorField: false,
    searchBarHeaderOpen: false
};

export default function errorFieldState(state = initialState, action) {
    switch (action.type) {
      case provider.providers.redux.ERROR_FIELD_FALSE:
        return Object.assign({}, state, {
            errorField: false
        });
      case provider.providers.redux.ERROR_FIELD_TRUE:
        return Object.assign({}, state, {
            errorField: true
        });
      default:
        return state;
    }
}