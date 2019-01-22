import { createSelector } from '@ngrx/store';

import { PagesState, selectPages } from '../pages.state';
import { PurchaseState } from './purchases.model';

export const selectPurchaseState = createSelector(
  selectPages,
  (state: PagesState) => state.purchases
);

export const selectPurchaseStatePurchases = createSelector(
  selectPurchaseState,
  (state: PurchaseState) => state.purchases
);

export const selectPurchaseStateError = createSelector(
  selectPurchaseState,
  (state: PurchaseState) => state.error
);
