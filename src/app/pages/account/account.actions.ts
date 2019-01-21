import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Account, Label } from './account.model';

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
  GET_PAYMENT_METHOD = '[Account] Get Payment Method',
  GET_PAYMENT_METHOD_SUCCESS = '[Account] Get Payment Method Success',
  GET_PAYMENT_METHOD_ERROR = '[Account] Get Payment Method Error',
  UPDATE_SELECTED_PAYMENT_METHOD = '[Account] Update Selected Payment Method',
  UPDATE_SELECTED_PAYMENT_METHOD_SUCCESS = '[Account] Update Selected Payment Method Success',
  UPDATE_SELECTED_PAYMENT_METHOD_ERROR = '[Account] Update Selected Payment Method Error'
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

export class ActionAccountGetPaymentMethod implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_METHOD;

  constructor() {}
}

export class ActionAccountGetPaymentMethodSuccess implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_METHOD_SUCCESS;

  constructor(readonly payload: string) {}
}

export class ActionAccountGetPaymentMethodError implements Action {
  readonly type = AccountActionTypes.GET_PAYMENT_METHOD_ERROR;

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
  | ActionAccountGetPaymentMethod
  | ActionAccountGetPaymentMethodSuccess
  | ActionAccountGetPaymentMethodError
  | ActionAccountUpdateSelectedPaymentMethod
  | ActionAccountUpdateSelectedPaymentMethodSuccess
  | ActionAccountUpdateSelectedPaymentMethodError;
