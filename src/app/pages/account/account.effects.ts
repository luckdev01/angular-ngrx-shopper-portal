import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  AccountActionTypes,
  ActionAccountGetAccounts,
  ActionAccountGetAccountsSuccess,
  ActionAccountGetAccountsError,
  ActionAccountGetPersonalInfoLabels,
  ActionAccountGetPersonalInfoLabelsSuccess,
  ActionAccountGetPersonalInfoLabelsError,
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
    ofType<ActionAccountGetAccounts>(AccountActionTypes.GET_ACCOUNTS),
    switchMap((action: ActionAccountGetAccounts) =>
      this.service.getAll().pipe(
        map(accounts => new ActionAccountGetAccountsSuccess({ accounts })),
        catchError(error => of(new ActionAccountGetAccountsError({ error })))
      )
    )
  );

  @Effect()
  getPersonalInfoLabels = this.actions$.pipe(
    ofType<ActionAccountGetPersonalInfoLabels>(
      AccountActionTypes.GET_PERSONAL_INFO_LABELS
    ),
    switchMap(() =>
      this.service.getPersonalInfoLabels().pipe(
        map(
          labels => new ActionAccountGetPersonalInfoLabelsSuccess({ labels })
        ),
        catchError(error =>
          of(new ActionAccountGetPersonalInfoLabelsError({ error }))
        )
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
