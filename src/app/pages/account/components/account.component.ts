import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAccountState } from '../account.selectors';
import {
  ActionAccountGetAccounts,
  ActionAccountGetPersonalInfoLabels,
  ActionAccountGetNotificationLabels,
  ActionAccountGetPaymentInfo,
  ActionAccountUpdateSelectedPaymentMethodSuccess,
  ActionAccountUpdatePaymentCardSuccess,
  ActionAccountUpdatePaymentBankSuccess
} from '../account.actions';
import {
  AccountState,
  PaymentMethods,
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
  accountsData: AccountState;
  paymentMethods: any;
  paymentDialogs: any;

  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.paymentMethods = PaymentMethods;
    this.paymentDialogs = PaymentDialogs;

    this.store.dispatch(new ActionAccountGetAccounts());
    this.store.dispatch(new ActionAccountGetPaymentInfo());
    this.store.dispatch(new ActionAccountGetPersonalInfoLabels());
    this.store.dispatch(new ActionAccountGetNotificationLabels());

    this.accounts$ = this.store.pipe(select(selectAccountState));
    this.accounts$.pipe().subscribe(response => {
      this.accountsData = response;
    });
  }

  openDialog(type: PaymentDialogType): void {
    const dialogParmas: DialogParams = {
      type: type,
      account: this.accountsData.accountInfos[0],
      selectedMethod: this.accountsData.paymentInfo.selectedMethod
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
