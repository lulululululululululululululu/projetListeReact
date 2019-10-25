import * as provider from '../../providers/provider';

const initialState = {
    mail: "",
    username: "",
    password: "",
    confirmPassword: "",
    onLoad: false,
    errors: []
};

export default function signUpReducers(state = initialState, action) {
    switch (action.type) {
      case provider.providers.redux.CHANGE_ONLOAD_STATUS_SIGN_UP:
        return {
          ...state,
            onLoad: action.onLoad
        };
      case provider.providers.redux.SET_ERRORS_SIGN_UP:
          return {
            ...state,
            errors: action.errors
          };
      case provider.providers.redux.SET_USER_CREDENTIALS_SIGN_UP:
          return {
            ...state,
            username: action.username,
            mail: action.mail,
            password: action.password,
            confirmPassword: action.confirmPassword
          };
      default:
          return state;
    }
}