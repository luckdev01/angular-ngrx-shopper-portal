import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { accountReducer } from './account/account.reducer';
import { purchaseReducer } from './purchases/purchases.reducer';
import { AccountState } from './account/account.model';
import { PurchaseState } from './purchases/purchases.model';

export const FEATURE_NAME = 'pages';
export const selectPages = createFeatureSelector<State, PagesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<PagesState> = {
  accounts: accountReducer,
  purchases: purchaseReducer
};

export interface PagesState {
  accounts: AccountState;
  purchases: PurchaseState;
}

export interface State extends AppState {
  pages: PagesState;
}
