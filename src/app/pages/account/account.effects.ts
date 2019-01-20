import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import {
  ActionAccountGet,
  ActionAccountGetSuccess,
  ActionAccountGetError,
  AccountActionTypes,
  ActionAccountGetLabels,
  ActionAccountGetLabelsSuccess,
  ActionAccountGetLabelsError,
  ActionAccountGetNotifications,
  ActionAccountGetNotificationsSuccess,
  ActionAccountGetNotificationsError,
  ActionAccountGetPaymentMethod,
  ActionAccountGetPaymentMethodSuccess,
  ActionAccountGetPaymentMethodError
} from './account.actions';
import { AccountService } from './account.service';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions<Action>,
    private service: AccountService
  ) {}

  @Effect()
  getAccounts = this.actions$.pipe(
    ofType<ActionAccountGet>(AccountActionTypes.GET),
    switchMap((action: ActionAccountGet) =>
      this.service.getAll().pipe(
        map(accounts => new ActionAccountGetSuccess({ accounts })),
        catchError(error => of(new ActionAccountGetError({ error })))
      )
    )
  );

  @Effect()
  getLabels = this.actions$.pipe(
    ofType<ActionAccountGetLabels>(AccountActionTypes.GET_LABELS),
    switchMap(() =>
      this.service.getLabels().pipe(
        map(labels => new ActionAccountGetLabelsSuccess({ labels })),
        catchError(error => of(new ActionAccountGetLabelsError({ error })))
      )
    )
  );

  @Effect()
  getNotifications = this.actions$.pipe(
    ofType<ActionAccountGetNotifications>(AccountActionTypes.GET_NOTIFICATIONS),
    switchMap(() =>
      this.service.getNotifications().pipe(
        map(
          notifications =>
            new ActionAccountGetNotificationsSuccess({ notifications })
        ),
        catchError(error =>
          of(new ActionAccountGetNotificationsError({ error }))
        )
      )
    )
  );

  @Effect()
  getPaymentMethod = this.actions$.pipe(
    ofType<ActionAccountGetPaymentMethod>(
      AccountActionTypes.GET_PAYMENT_METHOD
    ),
    switchMap(() =>
      this.service.getPaymentMethod().pipe(
        map(
          paymentMethod =>
            new ActionAccountGetPaymentMethodSuccess(paymentMethod)
        ),
        catchError(error =>
          of(new ActionAccountGetPaymentMethodError({ error }))
        )
      )
    )
  );
}
