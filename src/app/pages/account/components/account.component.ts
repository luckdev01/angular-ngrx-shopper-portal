import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectAccountState,
  selectAccountStateAccountInfos,
  selectAccountStatePaymentInfo,
  selectAccountStatePersonalInfoLabels,
  selectAccountStateNotificationLabels,
  selectAccountStateErrors
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
  AccountState,
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
  accounts$: Observable<AccountState>;
  accountInfos$: Observable<Account[]>;
  paymentInfo$: Observable<PaymentState>;
  personalInfoLabels$: Observable<Label[]>;
  notificationLabels$: Observable<Label[]>;
  errors$: Observable<HttpErrorResponse[]>;

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

    this.accounts$ = this.store.pipe(select(selectAccountState));
    this.accountInfos$ = this.store.pipe(
      select(selectAccountStateAccountInfos)
    );
    this.paymentInfo$ = this.store.pipe(select(selectAccountStatePaymentInfo));
    this.personalInfoLabels$ = this.store.pipe(
      select(selectAccountStatePersonalInfoLabels)
    );
    this.notificationLabels$ = this.store.pipe(
      select(selectAccountStateNotificationLabels)
    );
    this.errors$ = this.store.pipe(select(selectAccountStateErrors));

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
