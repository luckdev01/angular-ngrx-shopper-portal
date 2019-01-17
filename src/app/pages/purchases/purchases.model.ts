import { HttpErrorResponse } from '@angular/common/http';

export interface Purchase {
  id: string;
  date: string;
  store: string;
  orderNumber: string;
  orderAmount: string;
  amountOwed: string;
  status: string;
  more: string;
}

export interface PurchaseState {
  loading: boolean;
  purchases?: Purchase[];
  error?: HttpErrorResponse;
}
