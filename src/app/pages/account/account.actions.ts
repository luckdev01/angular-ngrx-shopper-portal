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
  GET_ACCOUNT_INFOS = '[Account] Get Account Infos',
  GET_ACCOUNT_INFOS_SUCCESS = '[Account] Get Account Infos Success',
  GET_ACCOUNT_INFOS_ERROR = '[Account] Get Account Infos Error',
  GET_PERSONAL_INFO_LABELS = '[Account] Get Personal Info Labels',
  GET_PERSONAL_INFO_LABELS_SUCCESS = '[Account] Get Personal Info Labels Success',
  GET_PERSONAL_INFO_LABELS_ERROR = '[Account] Get Personal Info Labels Error',
  GET_NOTIFICATION_LABELS = '[Account] Get Notification Labels',
  GET_NOTIFICATION_LABELS_SUCCESS = '[Account] Get Notification Labels Success',
  GET_NOTIFICATION_LABELS_ERROR = '[Account] Get Notification Labels Error',
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

export class ActionAccountGetAccountInfos implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNT_INFOS;

  constructor() {}
}

export class ActionAccountGetAccountInfosSuccess implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNT_INFOS_SUCCESS;

  constructor(readonly payload: { accounts: Account[] }) {}
}

export class ActionAccountGetAccountInfosError implements Action {
  readonly type = AccountActionTypes.GET_ACCOUNT_INFOS_ERROR;

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

export class ActionAccountGetNotificationLabels implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATION_LABELS;

  constructor() {}
}

export class ActionAccountGetNotificationLabelsSuccess implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATION_LABELS_SUCCESS;

  constructor(readonly payload: { notificationLabels: Label[] }) {}
}

export class ActionAccountGetNotificationLabelsError implements Action {
  readonly type = AccountActionTypes.GET_NOTIFICATION_LABELS_ERROR;

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
  | ActionAccountGetAccountInfos
  | ActionAccountGetAccountInfosSuccess
  | ActionAccountGetAccountInfosError
  | ActionAccountGetPersonalInfoLabels
  | ActionAccountGetPersonalInfoLabelsSuccess
  | ActionAccountGetPersonalInfoLabelsError
  | ActionAccountGetNotificationLabels
  | ActionAccountGetNotificationLabelsSuccess
  | ActionAccountGetNotificationLabelsError
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
