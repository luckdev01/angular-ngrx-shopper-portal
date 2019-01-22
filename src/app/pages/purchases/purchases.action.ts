import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Purchase } from './purchases.model';

export enum PurchaseActionTypes {
  GET_PURCHASE = '[Purchase] Get Purchase',
  GET_PURCHASE_SUCCESS = '[Purchase] Get Purchase Success',
  GET_PURCHASE_ERROR = '[Purchase] Get Purchase Error',
  PURCHASE_PAY = '[Purchase] Purchase Pay',
  PURCHASE_PAY_SUCCESS = '[Purchase] Purchase Pay Success',
  PURCHASE_PAY_ERROR = '[Purchase] Purchase Pay Error',
  PURCHASE_RESCHEDULE = '[Purchase] Purchase Reschedule',
  PURCHASE_RESCHEDULE_SUCCESS = '[Purchase] Purchase Reschedule Success',
  PURCHASE_RESCHEDULE_ERROR = '[Purchase] Purchase Reschedule Error'
}

export class ActionPurchaseGet implements Action {
  readonly type = PurchaseActionTypes.GET_PURCHASE;

  constructor() {}
}

export class ActionPurchaseGetSuccess implements Action {
  readonly type = PurchaseActionTypes.GET_PURCHASE_SUCCESS;

  constructor(readonly payload: { purchases: Purchase[] }) {}
}

export class ActionPurchaseGetError implements Action {
  readonly type = PurchaseActionTypes.GET_PURCHASE_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionPurchasePay implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_PAY;

  constructor() {}
}

export class ActionPurchasePaySuccess implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_PAY_SUCCESS;

  constructor(readonly payload: { purchases: Purchase[] }) {}
}

export class ActionPurchasePayError implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_PAY_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export class ActionPurchaseReschedule implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_RESCHEDULE;

  constructor() {}
}

export class ActionPurchaseRescheduleSuccess implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_RESCHEDULE_SUCCESS;

  constructor(readonly payload: { purchases: Purchase[] }) {}
}

export class ActionPurchaseRescheduleError implements Action {
  readonly type = PurchaseActionTypes.PURCHASE_RESCHEDULE_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type PurchaseActions =
  | ActionPurchaseGet
  | ActionPurchaseGetSuccess
  | ActionPurchaseGetError
  | ActionPurchasePay
  | ActionPurchasePaySuccess
  | ActionPurchasePayError
  | ActionPurchaseReschedule
  | ActionPurchaseRescheduleSuccess
  | ActionPurchaseRescheduleError;
