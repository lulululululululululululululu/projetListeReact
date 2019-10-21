import * as provider from '../../providers/provider';
import _ from 'lodash';

const initialState = {
    items: [
    ],
    errorField : false,
    searchBarHeaderOpen : false,
    isConnected : false
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
      case provider.providers.redux.ERROR_FIELD:
        return {
          ...state,
            errorField: action.errorField
        }
      case provider.providers.redux.ADD_IN_LIST:
        return {
          ...state,
          items: action.items
        }
      case provider.providers.redux.CHANGE_ITEM_TYPE_EDITION:
        state.items[action.itemIndex]["isInEdition"] = action.isInEdition;
        return {
          ...state,
          items : state.items
        };
      case provider.providers.redux.CHANGE_ITEM_IS_DELETED:
        state.items[action.itemIndex]["isDeleted"] = action.isDeletedValue;
        return {
          ...state,
          items : state.items
        };
      case provider.providers.redux.CHANGE_ITEM_VALUE:
        state.items[action.itemIndex]["value"] = action.itemValue;
        return {
          ...state,
          items : state.items
        };
      case provider.providers.redux.SPLICE_LIST:
        state.items.splice(action.itemId, 1);
        _.forEach(state.items, function (value, key) {
          state.items[key]["key"] = key;
        })
        return {
          ...state,
          items : state.items
        };
      default:
        return state;
    }
}