import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Purchase } from './purchases.model';

const PROXY_URL = './';

@Injectable()
export class PurchaseService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Purchase[]> {
    return this.httpClient
      .get(PROXY_URL + `/assets/purchases.json`)
      .pipe(map((purchases: Purchase[]) => purchases));
  }
}
