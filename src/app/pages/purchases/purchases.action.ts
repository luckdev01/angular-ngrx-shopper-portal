import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Purchase } from './purchases.model';

export enum PurchaseActionTypes {
  GET = '[Purchase] Get',
  GET_SUCCESS = '[Purchase] Get Success',
  GET_ERROR = '[Purchase] Get Error'
}

export class ActionPurchaseGet implements Action {
  readonly type = PurchaseActionTypes.GET;

  constructor() {}
}

export class ActionPurchaseGetSuccess implements Action {
  readonly type = PurchaseActionTypes.GET_SUCCESS;

  constructor(readonly payload: { purchases: Purchase[] }) {}
}

export class ActionPurchaseGetError implements Action {
  readonly type = PurchaseActionTypes.GET_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type PurchaseActions =
  | ActionPurchaseGet
  | ActionPurchaseGetSuccess
  | ActionPurchaseGetError;
