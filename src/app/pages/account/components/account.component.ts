import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectAccountInfos,
  selectPaymentInfo,
  selectPersonalInfoLabels,
  selectNotificationLabels,
  selectAccountInfoLoading,
  selectPaymentInfoLoading,
  selectPersonalInfoLabelsLoading,
  selectNotificationLabelsLoading,
  selectAccountInfoError,
  selectPaymentInfoError,
  selectPersonalInfoLabelsError,
  selectNotificationLabelsError
} from '../account.selectors';
import {
  ActionAccountGetAccountInfos,
  ActionAccountGetPersonalInfoLabels,
  ActionAccountGetNotificationLabels,
  ActionAccountGetPaymentInfo,
  ActionAccountUpdateSelectedPaymentMethodSuccess,
  ActionAccountUpdatePaymentCardSuccess,
  ActionAccountUpdatePaymentBankSuccess
} from '../account.actions';
import {
  Account,
  Label,
  PaymentState,
  PaymentMethods,
  PaymentDialogs,
  PaymentDialogType,
  DialogParams
} from '../account.model';

import { State } from '../../pages.state';
import { DialogComponent } from './dialog/dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'anms-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountInfos$: Observable<Account[]>;
  paymentInfo$: Observable<PaymentState>;
  personalInfoLabels$: Observable<Label[]>;
  notificationLabels$: Observable<Label[]>;
  accountInfoLoading$: Observable<boolean>;
  personalInfoLoading$: Observable<boolean>;
  notificationLoading$: Observable<boolean>;
  paymentInfoLoading$: Observable<boolean>;
  accountInfoError$: Observable<HttpErrorResponse>;
  personalInfoError$: Observable<HttpErrorResponse>;
  notificationError$: Observable<HttpErrorResponse>;
  paymentInfoError$: Observable<HttpErrorResponse>;

  accountInfos: Account[];
  paymentInfo: PaymentState;
  paymentMethods: any;
  paymentDialogs: any;

  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.paymentMethods = PaymentMethods;
    this.paymentDialogs = PaymentDialogs;

    this.store.dispatch(new ActionAccountGetAccountInfos());
    this.store.dispatch(new ActionAccountGetPaymentInfo());
    this.store.dispatch(new ActionAccountGetPersonalInfoLabels());
    this.store.dispatch(new ActionAccountGetNotificationLabels());

    this.accountInfos$ = this.store.pipe(select(selectAccountInfos));
    this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    this.personalInfoLabels$ = this.store.pipe(
      select(selectPersonalInfoLabels)
    );
    this.notificationLabels$ = this.store.pipe(
      select(selectNotificationLabels)
    );

    this.accountInfoLoading$ = this.store.pipe(
      select(selectAccountInfoLoading)
    );
    this.paymentInfoLoading$ = this.store.pipe(
      select(selectPaymentInfoLoading)
    );
    this.personalInfoLoading$ = this.store.pipe(
      select(selectPersonalInfoLabelsLoading)
    );
    this.notificationLoading$ = this.store.pipe(
      select(selectNotificationLabelsLoading)
    );

    this.accountInfoError$ = this.store.pipe(select(selectAccountInfoError));
    this.paymentInfoError$ = this.store.pipe(select(selectPaymentInfoError));
    this.personalInfoError$ = this.store.pipe(
      select(selectPersonalInfoLabelsError)
    );
    this.notificationError$ = this.store.pipe(
      select(selectNotificationLabelsError)
    );

    this.accountInfos$.pipe().subscribe(response => {
      this.accountInfos = response;
    });
    this.paymentInfo$.pipe().subscribe(response => {
      this.paymentInfo = response;
    });
  }

  openDialog(type: PaymentDialogType): void {
    const dialogParmas: DialogParams = {
      type: type,
      account: this.accountInfos[0],
      selectedMethod: this.paymentInfo.selectedMethod
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogParmas
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.type === this.paymentDialogs.CHANGE_DEFAULT_DIALOG) {
        this.store.dispatch(
          new ActionAccountUpdateSelectedPaymentMethodSuccess(
            result.selectedMethod
          )
        );
      } else if (result.type === this.paymentDialogs.CARD_DIALOG) {
        this.store.dispatch(
          new ActionAccountUpdatePaymentCardSuccess(result.formdata)
        );
      } else if (result.type === this.paymentDialogs.BANK_DIALOG) {
        this.store.dispatch(
          new ActionAccountUpdatePaymentBankSuccess(result.formdata)
        );
      }
    });
  }
}
