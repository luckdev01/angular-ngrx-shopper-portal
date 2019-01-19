import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import {
  ActionPurchaseGet,
  ActionPurchaseGetSuccess,
  ActionPurchaseGetError,
  PurchaseActionTypes
} from './purchases.action';
import { PurchaseService } from './purchases.service';

@Injectable()
export class PurchaseEffects {
  constructor(
    private actions$: Actions<Action>,
    private service: PurchaseService
  ) {}

  @Effect()
  getPurchases = this.actions$.pipe(
    ofType<ActionPurchaseGet>(PurchaseActionTypes.GET),
    switchMap((action: ActionPurchaseGet) =>
      this.service.getAll().pipe(
        map(purchases => new ActionPurchaseGetSuccess({ purchases })),
        catchError(error => of(new ActionPurchaseGetError({ error })))
      )
    )
  );
}
