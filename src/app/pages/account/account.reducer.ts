import { AccountState } from './account.model';
import { AccountActions, AccountActionTypes } from './account.actions';
import { error } from '@angular/compiler/src/util';

export const initialState: AccountState = {
  loading: false,
  accountInfos: [],
  selectedMethod: '',
  errors: []
};

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions
): AccountState {
  switch (action.type) {
    case AccountActionTypes.GET_ACCOUNTS:
      return {
        ...state,
        loading: true,
        accountInfos: null,
        errors: null
      };

    case AccountActionTypes.GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        accountInfos: action.payload.accounts,
        errors: null
      };

    case AccountActionTypes.GET_ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        accountInfos: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS:
      return {
        ...state,
        loading: true,
        personalInfoLabels: null
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS_SUCCESS:
      return {
        ...state,
        loading: false,
        personalInfoLabels: action.payload.labels
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS_ERROR:
      return {
        ...state,
        loading: false,
        personalInfoLabels: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.GET_NOTIFICATIONS:
      return {
        ...state,
        loading: true,
        notifications: null
      };

    case AccountActionTypes.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.payload.notifications
      };

    case AccountActionTypes.GET_NOTIFICATIONS_ERROR:
      return {
        ...state,
        loading: false,
        notifications: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.GET_PAYMENT_METHOD:
      return {
        ...state,
        loading: true,
        selectedMethod: null
      };

    case AccountActionTypes.GET_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedMethod: action.payload
      };

    case AccountActionTypes.GET_PAYMENT_METHOD_ERROR:
      return {
        ...state,
        loading: false,
        selectedMethod: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        loading: true,
        selectedMethod: null,
        errors: null
      };
    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedMethod: action.payload
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_ERROR:
      return {
        ...state,
        loading: false,
        errors: [action.payload.error]
      };

    default:
      return state;
  }
}
