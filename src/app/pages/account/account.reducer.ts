import { AccountState, PaymentState } from './account.model';
import { AccountActions, AccountActionTypes } from './account.actions';
import { error } from '@angular/compiler/src/util';

export const initialState: AccountState = {
  accountInfoLoading: false,
  personalInfoLoading: false,
  notificationLoading: false,
  paymentInfoLoading: false,
  paymentInfoSaving: false,
  accountInfos: [],
  paymentInfo: null,
  personalInfoLabels: [],
  notificationLabels: [],
  accountInfoError: null,
  personalInfoError: null,
  notificationError: null,
  paymentInfoError: null,
  paymentSaveError: null
};

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions
): AccountState {
  switch (action.type) {
    case AccountActionTypes.GET_ACCOUNT_INFOS:
      return {
        ...state,
        accountInfoLoading: true,
        accountInfos: null,
        accountInfoError: null
      };

    case AccountActionTypes.GET_ACCOUNT_INFOS_SUCCESS:
      return {
        ...state,
        accountInfoLoading: false,
        accountInfos: action.payload.accounts,
        accountInfoError: null
      };

    case AccountActionTypes.GET_ACCOUNT_INFOS_ERROR:
      return {
        ...state,
        accountInfoLoading: false,
        accountInfos: null,
        accountInfoError: action.payload.error
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS:
      return {
        ...state,
        personalInfoLoading: true,
        personalInfoLabels: null,
        personalInfoError: null
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS_SUCCESS:
      return {
        ...state,
        personalInfoLoading: false,
        personalInfoLabels: action.payload.labels,
        personalInfoError: null
      };

    case AccountActionTypes.GET_PERSONAL_INFO_LABELS_ERROR:
      return {
        ...state,
        personalInfoLoading: false,
        personalInfoLabels: null,
        personalInfoError: action.payload.error
      };

    case AccountActionTypes.GET_NOTIFICATION_LABELS:
      return {
        ...state,
        notificationLoading: true,
        notificationLabels: null,
        notificationError: null
      };

    case AccountActionTypes.GET_NOTIFICATION_LABELS_SUCCESS:
      return {
        ...state,
        notificationLoading: false,
        notificationLabels: action.payload.notificationLabels,
        notificationError: null
      };

    case AccountActionTypes.GET_NOTIFICATION_LABELS_ERROR:
      return {
        ...state,
        notificationLoading: false,
        notificationLabels: null,
        notificationError: action.payload.error
      };

    case AccountActionTypes.GET_PAYMENT_INFO:
      return {
        ...state,
        paymentInfoLoading: true,
        paymentInfo: null,
        paymentInfoError: null
      };

    case AccountActionTypes.GET_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        paymentInfoLoading: false,
        paymentInfo: action.payload,
        paymentInfoError: null
      };

    case AccountActionTypes.GET_PAYMENT_INFO_ERROR:
      return {
        ...state,
        paymentInfoLoading: false,
        paymentInfo: null,
        paymentInfoError: action.payload.error
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        paymentInfoSaving: true,
        paymentSaveError: null
      };
    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, selectedMethod: action.payload },
        paymentSaveError: null
      };

    case AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_ERROR:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, selectedMethod: '' },
        paymentSaveError: action.payload.error
      };

    case AccountActionTypes.UPDATE_PAYMENT_CARD:
      return {
        ...state,
        paymentInfoSaving: true,
        paymentSaveError: null
      };
    case AccountActionTypes.UPDATE_PAYMENT_CARD_SUCCESS:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, card: action.payload },
        paymentSaveError: null
      };

    case AccountActionTypes.UPDATE_PAYMENT_CARD_ERROR:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, card: null },
        paymentSaveError: action.payload.error
      };
    case AccountActionTypes.UPDATE_PAYMENT_BANK:
      return {
        ...state,
        paymentInfoSaving: true,
        paymentSaveError: null
      };
    case AccountActionTypes.UPDATE_PAYMENT_BANK_SUCCESS:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, bank: action.payload },
        paymentSaveError: null
      };

    case AccountActionTypes.UPDATE_PAYMENT_BANK_ERROR:
      return {
        ...state,
        paymentInfoSaving: false,
        paymentInfo: { ...state.paymentInfo, bank: null },
        paymentSaveError: action.payload.error
      };
    default:
      return state;
  }
}
