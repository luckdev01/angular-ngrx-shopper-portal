import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import {
  Account,
  Label,
  PaymentState,
  PaymentCard,
  PaymentBank
} from './account.model';

export enum AccountActionTypes {
  GET_ACCOUNTS = '[Account] Get Accounts',
  GET_ACCOUNTS_SUCCESS = '[Account] Get Accounts Success',
  GET_ACCOUNTS_ERROR = '[Account] Get Accounts Error',
  GET_PERSONAL_INFO_LABELS = '[Account] Get Personal Info Labels',
  GET_PERSONAL_INFO_LABELS_SUCCESS = '[Account] Get Personal Info Labels Success',
  GET_PERSONAL_INFO_LABELS_ERROR = '[Account] Get Personal Info Labels Error',
  GET_NOTIFICATIONS = '[Account] Get Notifications',
  GET_NOTIFICATIONS_SUCCESS = '[Account] Get Notifications Success',
  GET_NOTIFICATIONS_ERROR = '[Account] Get Notifications Error',
  GET_PAYMENT_INFO = '[Account] Get Payment Info',
  GET_PAYMENT_INFO_SUCCESS = '[Account] Get Payment Info Success',
  GET_PAYMENT_INFO_ERROR = '[Account] Get Payment Info Error',
  UPDATE_SELECTED_PAYMENT_METHOD = '[Account] Update Selected Payment Method',
  UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS = '[Account] Update Selected Payment Method Success',
  UPDATE_SELECTED_PAYMENT_METHOD_ERROR = '[Account] Update Selected Payment Method Error',
  UPDATE_PAYMENT_CARD = '[Account] Update Payment Card',
  UPDATE_PAYMENT_CARD_SUCCESS = '[Account] Update Payment Card Success',
  UPDATE_PAYMENT_CARD_ERROR = '[Account] Update Payment Card Error',
  UPDATE_PAYMENT_BANK = '[Account] Update Payment Bank',
  UPDATE_PAYMENT_BANK_SUCCESS = '[Account] Update Payment Bank Success',
  UPDATE_PAYMENT_BANK_ERROR = '[Account] Update Payment Bank Error'
}

export class ActionAccountGetAccounts implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNTS;

  constructor() {}
}

export class ActionAccountGetAccountsSuccess implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNTS_SUCCESS;

  constructor(readonly payload: { accounts: Account[] }) {}
}

export class ActionAccountGetAccountsError implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNTS_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountGetPersonalInfoLabels implements Action {
  readonly type = AccountActionTypes.GET_PERSONAL_INFO_LABELS;

  constructor() {}
}

export class ActionAccountGetPersonalInfoLabelsSuccess implements Action {
  readonly type = AccountActionTypes.GET_PERSONAL_INFO_LABELS_SUCCESS;

  constructor(readonly payload: { labels: Label[] }) {}
}

export class ActionAccountGetPersonalInfoLabelsError implements Action {
  readonly type = AccountActionTypes.GET_PERSONAL_INFO_LABELS_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountGetNotifications implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS;

  constructor() {}
}

export class ActionAccountGetNotificationsSuccess implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS_SUCCESS;

  constructor(readonly payload: { notifications: Label[] }) {}
}

export class ActionAccountGetNotificationsError implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountGetPaymentInfo implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_INFO;

  constructor() {}
}

export class ActionAccountGetPaymentInfoSuccess implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_INFO_SUCCESS;

  constructor(readonly payload: PaymentState) {}
}

export class ActionAccountGetPaymentInfoError implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_INFO_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountUpdateSelectedPaymentMethod implements Action {
  readonly type = AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD;

  constructor() {}
}

export class ActionAccountUpdateSelectedPaymentMethodSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS;

  constructor(readonly payload: string) {}
}

export class ActionAccountUpdateSelectedPaymentMethodError implements Action {
  readonly type = AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountUpdatePaymentCard implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_CARD;

  constructor() {}
}

export class ActionAccountUpdatePaymentCardSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_CARD_SUCCESS;

  constructor(readonly payload: PaymentCard) {}
}

export class ActionAccountUpdatePaymentCardError implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_CARD_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountUpdatePaymentBank implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_BANK;

  constructor() {}
}

export class ActionAccountUpdatePaymentBankSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_BANK_SUCCESS;

  constructor(readonly payload: PaymentBank) {}
}

export class ActionAccountUpdatePaymentBankError implements Action {
  readonly type = AccountActionTypes.UPDATE_PAYMENT_BANK_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type AccountActions =
  | ActionAccountGetAccounts
  | ActionAccountGetAccountsSuccess
  | ActionAccountGetAccountsError
  | ActionAccountGetPersonalInfoLabels
  | ActionAccountGetPersonalInfoLabelsSuccess
  | ActionAccountGetPersonalInfoLabelsError
  | ActionAccountGetNotifications
  | ActionAccountGetNotificationsSuccess
  | ActionAccountGetNotificationsError
  | ActionAccountGetPaymentInfo
  | ActionAccountGetPaymentInfoSuccess
  | ActionAccountGetPaymentInfoError
  | ActionAccountUpdateSelectedPaymentMethod
  | ActionAccountUpdateSelectedPaymentMethodSuccess
  | ActionAccountUpdateSelectedPaymentMethodError
  | ActionAccountUpdatePaymentCard
  | ActionAccountUpdatePaymentCardSuccess
  | ActionAccountUpdatePaymentCardError
  | ActionAccountUpdatePaymentBank
  | ActionAccountUpdatePaymentBankSuccess
  | ActionAccountUpdatePaymentBankError;
