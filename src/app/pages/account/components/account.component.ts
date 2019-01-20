import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { selectAccounts } from '../account.selectors';
import {
  ActionAccountGet,
  ActionAccountGetLabels,
  ActionAccountGetNotifications,
  ActionAccountUpdateSelectedPaymentMethod,
  ActionAccountGetPaymentMethod
} from '../account.actions';
import {
  AccountState,
  Account,
  Label,
  Notification,
  PaymentDialog
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
  errorMsg: HttpErrorResponse;
  selectedMethod: string;

  accounts: Account[];
  labels: Label[];
  notifications: Notification[];
  paymentDialog: any;

  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.paymentDialog = PaymentDialog;

    this.store.dispatch(new ActionAccountGet());
    this.store.dispatch(new ActionAccountGetLabels());
    this.store.dispatch(new ActionAccountGetNotifications());
    this.store.dispatch(new ActionAccountGetPaymentMethod());

    this.accounts$ = this.store.pipe(select(selectAccounts));
    this.accounts$.pipe().subscribe(res => {
      if (res.loading) {
        this.isLoading = true;
      } else {
        if (res.error) this.errorMsg = res.error;
        else this.accounts = res.accounts;
      }

      this.labels = res.labels;
      this.notifications = res.notifications;
      this.selectedMethod = res.selectedMethod;
    });
  }

  openDialog(type): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { type: type, accounts: this.accounts, labels: this.labels }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.store.dispatch(new ActionAccountUpdateSelectedPaymentMethod(result));
    });
  }
}
