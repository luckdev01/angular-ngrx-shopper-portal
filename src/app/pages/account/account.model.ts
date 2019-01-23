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

export interface PaymentCard {
  card: string;
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
  zipcode: string;
}

export interface PaymentBank {
  bank: string;
}

export interface Label {
  key: string;
  value: string;
}

export interface AccountState {
  accountInfoLoading: boolean;
  personalInfoLoading: boolean;
  notificationLoading: boolean;
  paymentInfoLoading: boolean;
  paymentInfoSaving: boolean;
  accountInfos?: Account[];
  personalInfoLabels?: Label[];
  notificationLabels?: Label[];
  paymentInfo: PaymentState;
  accountInfoError: HttpErrorResponse;
  personalInfoError: HttpErrorResponse;
  notificationError: HttpErrorResponse;
  paymentInfoError: HttpErrorResponse;
  paymentSaveError: HttpErrorResponse;
}

export interface PaymentState {
  selectedMethod: string;
  card: PaymentCard;
  bank: PaymentBank;
}

export interface DialogParams {
  type: PaymentDialogType;
  account: Account;
  selectedMethod: string;
}

export enum PaymentMethods {
  BANK = 'bank',
  CARD = 'card'
}

export enum PaymentDialogs {
  CARD_DIALOG = 'card_dialog',
  BANK_DIALOG = 'bank_dialog',
  CHANGE_DEFAULT_DIALOG = 'change_default_dialog'
}

export type PaymentDialogType =
  | PaymentDialogs.CARD_DIALOG
  | PaymentDialogs.BANK_DIALOG
  | PaymentDialogs.CHANGE_DEFAULT_DIALOG;
