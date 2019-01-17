import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { selectPurchases } from '../purchases.selectors';
import { ActionPurchaseGet } from '../purchases.action';
import { PurchaseState, Purchase } from '../purchases.model';

import { State } from '../../pages.state';

@Component({
  selector: 'anms-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  purchases$: Observable<PurchaseState>;
  isLoading: boolean;
  errorMsg: HttpErrorResponse;
  purchases: Purchase[];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new ActionPurchaseGet());

    this.purchases$ = this.store.pipe(select(selectPurchases));
    this.purchases$.pipe().subscribe(res => {
      if (res.loading) {
        this.isLoading = true;
      } else {
        if (res.error) this.errorMsg = res.error;
        else {
          this.purchases = res.purchases;
        }
      }
    });
  }
}
