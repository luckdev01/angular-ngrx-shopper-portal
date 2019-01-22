import { AccountState, PaymentState } from './account.model';
import { AccountActions, AccountActionTypes } from './account.actions';
import { error } from '@angular/compiler/src/util';

export const initialState: AccountState = {
  loading: false,
  accountInfos: [],
  paymentInfo: null,
  personalInfoLabels: [],
  notificationLabels: [],
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

    case AccountActionTypes.GET_NOTIFICATION_LABELS:
      return {
        ...state,
        loading: true,
        notificationLabels: null
      };

    case AccountActionTypes.GET_NOTIFICATION_LABELS_SUCCESS:
      return {
        ...state,
        loading: false,
        notificationLabels: action.payload.notificationLabels
      };

    case AccountActionTypes.GET_NOTIFICATION_LABELS_ERROR:
      return {
        ...state,
        loading: false,
        notificationLabels: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.GET_PAYMENT_INFO:
      return {
        ...state,
        loading: true,
        paymentInfo: null
      };

    case AccountActionTypes.GET_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentInfo: action.payload
      };

    case AccountActionTypes.GET_PAYMENT_INFO_ERROR:
      return {
        ...state,
        loading: false,
        paymentInfo: null,
        errors: [action.payload.error, ...(state.errors || [])]
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentInfo: { ...state.paymentInfo, selectedMethod: action.payload }
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_ERROR:
      return {
        ...state,
        loading: false,
        errors: [action.payload.error]
      };

    case AccountActionTypes.UPDATE_PAYMENT_CARD:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case AccountActionTypes.UPDATE_PAYMENT_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentInfo: { ...state.paymentInfo, card: action.payload }
      };

    case AccountActionTypes.UPDATE_PAYMENT_CARD_ERROR:
      return {
        ...state,
        loading: false,
        errors: [action.payload.error]
      };
    case AccountActionTypes.UPDATE_PAYMENT_BANK:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case AccountActionTypes.UPDATE_PAYMENT_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentInfo: { ...state.paymentInfo, bank: action.payload }
      };

    case AccountActionTypes.UPDATE_PAYMENT_BANK_ERROR:
      return {
        ...state,
        loading: false,
        errors: [action.payload.error]
      };
    default:
      return state;
  }
}
