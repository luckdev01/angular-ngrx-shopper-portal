import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Account, Label, Notification } from './account.model';

export enum AccountActionTypes {
  GET = '[Account] Get',
  GET_SUCCESS = '[Account] Get Success',
  GET_ERROR = '[Account] Get Error',
  GET_LABELS = '[Account] Get Labels',
  GET_LABELS_SUCCESS = '[Account] Get Labels Success',
  GET_LABELS_ERROR = '[Account] Get Labels Error',
  GET_NOTIFICATIONS = '[Account] Get Notifications',
  GET_NOTIFICATIONS_SUCCESS = '[Account] Get Notifications Success',
  GET_NOTIFICATIONS_ERROR = '[Account] Get Notifications Error',
  UPDATE_SELECTED_PAYMENT_METHOD = '[Account] Update Selected Payment Method'
}

export class ActionAccountGet implements Action {
  readonly type = AccountActionTypes.GET;

  constructor() {}
}

export class ActionAccountGetSuccess implements Action {
  readonly type = AccountActionTypes.GET_SUCCESS;

  constructor(readonly payload: { accounts: Account[] }) {}
}

export class ActionAccountGetError implements Action {
  readonly type = AccountActionTypes.GET_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountGetLabels implements Action {
  readonly type = AccountActionTypes.GET_LABELS;

  constructor() {}
}

export class ActionAccountGetLabelsSuccess implements Action {
  readonly type = AccountActionTypes.GET_LABELS_SUCCESS;

  constructor(readonly payload: { labels: Label[] }) {}
}

export class ActionAccountGetLabelsError implements Action {
  readonly type = AccountActionTypes.GET_LABELS_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountGetNotifications implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS;

  constructor() {}
}

export class ActionAccountGetNotificationsSuccess implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS_SUCCESS;

  constructor(readonly payload: { notifications: Notification[] }) {}
}

export class ActionAccountGetNotificationsError implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATIONS_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionAccountUpdateSelectedPaymentMethod implements Action {
  readonly type = AccountActionTypes.UPDATE_SELECTED_PAYMENT_METHOD;

  constructor(readonly payload: string) {}
}

export type AccountActions =
  | ActionAccountGet
  | ActionAccountGetSuccess
  | ActionAccountGetError
  | ActionAccountGetLabels
  | ActionAccountGetLabelsSuccess
  | ActionAccountGetLabelsError
  | ActionAccountUpdateSelectedPaymentMethod
  | ActionAccountGetNotifications
  | ActionAccountGetNotificationsSuccess
  | ActionAccountGetNotificationsError;
