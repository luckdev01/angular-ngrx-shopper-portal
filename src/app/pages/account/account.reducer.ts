import { AccountState } from './account.model';
import { AccountActions, AccountActionTypes } from './account.actions';

export const initialState: AccountState = {
  loading: false,
  accounts: [],
  selectedMethod: ''
};

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions
): AccountState {
  switch (action.type) {
    case AccountActionTypes.GET:
      return {
        ...state,
        loading: true,
        accounts: null,
        error: null
      };

    case AccountActionTypes.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: action.payload.accounts,
        error: null
      };

    case AccountActionTypes.GET_ERROR:
      return {
        ...state,
        loading: false,
        accounts: null,
        error: action.payload.error
      };

    case AccountActionTypes.GET_LABELS:
      return {
        ...state,
        labels: null
      };

    case AccountActionTypes.GET_LABELS_SUCCESS:
      return {
        ...state,
        labels: action.payload.labels
      };

    case AccountActionTypes.GET_LABELS_ERROR:
      return {
        ...state,
        labels: null,
        error: action.payload.error
      };

    case AccountActionTypes.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: null
      };

    case AccountActionTypes.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload.notifications
      };

    case AccountActionTypes.GET_NOTIFICATIONS_ERROR:
      return {
        ...state,
        notifications: null,
        error: action.payload.error
      };

    case AccountActionTypes.GET_PAYMENT_METHOD:
      return {
        ...state,
        selectedMethod: null
      };

    case AccountActionTypes.GET_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        selectedMethod: action.payload
      };

    case AccountActionTypes.GET_PAYMENT_METHOD_ERROR:
      return {
        ...state,
        selectedMethod: null,
        error: action.payload.error
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        selectedMethod: action.payload
      };

    default:
      return state;
  }
}
