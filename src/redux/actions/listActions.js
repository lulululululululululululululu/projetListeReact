import * as provider from '../../providers/provider';

export const error_field_false = (value) => ({ type: provider.providers.redux.ERROR_FIELD_FALSE, value });
export const error_field_true = (value) => ({ type: provider.providers.redux.ERROR_FIELD_TRUE, value });