import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { selectAccounts } from '../account.selectors';
import {
  ActionAccountGetAccounts,
  ActionAccountGetLabels,
  ActionAccountGetNotifications,
  ActionAccountGetPaymentMethod,
  ActionAccountUpdateSelectedPaymentMethodSuccess
} from '../account.actions';
import {
  AccountState,
  Account,
  Label,
  Notification,
  PaymentDialogs,
  PaymentDialogType,
  DialogParams
} from '../account.model';

import { State } from '../../pages.state';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'anms-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts$: Observable<AccountState>;
  isLoading: boolean;
  errors: HttpErrorResponse[];
  selectedMethod: string;

  accounts: Account[];
  labels: Label[];
  notifications: Notification[];
  paymentDialogs: any;

  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.paymentDialogs = PaymentDialogs;

    this.store.dispatch(new ActionAccountGetAccounts());
    this.store.dispatch(new ActionAccountGetLabels());
    this.store.dispatch(new ActionAccountGetNotifications());
    this.store.dispatch(new ActionAccountGetPaymentMethod());

    this.accounts$ = this.store.pipe(select(selectAccounts));
    this.accounts$.pipe().subscribe(res => {
      if (res.loading) {
        this.isLoading = true;
      } else {
        if (res.errors) this.errors = res.errors;
        else {
          this.accounts = res.accounts;
          this.labels = res.labels;
          this.notifications = res.notifications;
          this.selectedMethod = res.selectedMethod;
        }
      }
    });
  }

  openDialog(type: PaymentDialogType): void {
    const dialogParmas: DialogParams = {
      type: type,
      account: this.accounts[0],
      selectedType: this.selectedMethod
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogParmas
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.type === this.paymentDialogs.CHANGE_DEFAULT_DIALOG) {
        this.store.dispatch(
          new ActionAccountUpdateSelectedPaymentMethodSuccess(
            result.selectedType
          )
        );
      }
    });
  }
}
