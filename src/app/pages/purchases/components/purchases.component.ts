import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import {
  selectPurchaseStatePurchases,
  selectPurchaseStateError
} from '../purchases.selectors';
import { ActionPurchaseGet } from '../purchases.action';
import { Purchase } from '../purchases.model';

import { State } from '../../pages.state';

@Component({
  selector: 'anms-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  purchases$: Observable<Purchase[]>;
  loading: boolean;
  error$: Observable<HttpErrorResponse>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new ActionPurchaseGet());
    this.purchases$ = this.store.pipe(select(selectPurchaseStatePurchases));
    this.error$ = this.store.pipe(select(selectPurchaseStateError));
  }
}
