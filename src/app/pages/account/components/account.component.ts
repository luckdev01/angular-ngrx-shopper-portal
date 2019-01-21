import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAccounts } from '../account.selectors';
import {
  ActionAccountGetAccounts,
  ActionAccountGetPersonalInfoLabels,
  ActionAccountGetNotifications,
  ActionAccountGetPaymentMethod,
  ActionAccountUpdateSelectedPaymentMethodSuccess
} from '../account.actions';
import {
  AccountState,
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
  paymentDialogs: any;

  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.paymentDialogs = PaymentDialogs;

    this.store.dispatch(new ActionAccountGetAccounts());
    this.store.dispatch(new ActionAccountGetPersonalInfoLabels());
    this.store.dispatch(new ActionAccountGetNotifications());
    this.store.dispatch(new ActionAccountGetPaymentMethod());

    this.accounts$ = this.store.pipe(select(selectAccounts));
    this.accounts$.pipe().subscribe(res => (this.accountsData = res));
  }

  openDialog(type: PaymentDialogType): void {
    const dialogParmas: DialogParams = {
      type: type,
      account: this.accountsData.accountInfos[0],
      selectedType: this.accountsData.selectedMethod
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
