import { HttpErrorResponse } from '@angular/common/http';

export interface Account {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  cardInfo: string;
  bankInfo: string;
  paymentReminder: boolean;
  paymentCompleted: boolean;
  paymentFailed: boolean;
  paymentRescheduled: boolean;
  newsPurchase: boolean;
  orderDenied: boolean;
  orderCompleted: boolean;
  accountChanges: boolean;
}

export interface Label {
  key: string;
  value: string;
}

export interface Notification {
  key: string;
  value: string;
}

export interface AccountState {
  loading: boolean;
  accounts?: Account[];
  labels?: Label[];
  notifications?: Notification[];
  selectedMethod: string;
  error?: HttpErrorResponse;
}

export enum PaymentMethods {
  BANK = 'bank',
  CARD = 'card'
}
