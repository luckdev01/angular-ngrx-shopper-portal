import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Label, PaymentState } from './account.model';

const PROXY_URL = './';

@Injectable()
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Account[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/accounts.json`)
      .pipe(map((accounts: Account[]) => accounts));
  }

  getPersonalInfoLabels(): Observable<Label[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/personalinfolabels.json`)
      .pipe(map((personalInfoLabels: Label[]) => personalInfoLabels));
  }

  getNotifications(): Observable<Label[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/notifications.json`)
      .pipe(map((notifications: Label[]) => notifications));
  }

  getPaymentMethod(): Observable<string> {
    return this.httpClient
      .get(PROXY_URL + `/assets/paymentsetting.json`)
      .pipe(map((paymentState: PaymentState) => paymentState.paymentMethod));
  }
}
