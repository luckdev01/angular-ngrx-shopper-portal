import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account, Label, Notification, PaymentSetting } from './account.model';

const PROXY_URL = './';

@Injectable()
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Account[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/accounts.json`)
      .pipe(map((accounts: Account[]) => accounts));
  }

  getLabels(): Observable<Label[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/labels.json`)
      .pipe(map((labels: Label[]) => labels));
  }

  getNotifications(): Observable<Notification[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/notifications.json`)
      .pipe(map((notifications: Notification[]) => notifications));
  }

  getPaymentMethod(): Observable<string> {
    return this.httpClient
      .get(PROXY_URL + `/assets/paymentsetting.json`)
      .pipe(
        map((paymentSetting: PaymentSetting) => paymentSetting.paymentMethod)
      );
  }
}
