import { createSelector } from '@ngrx/store';

import { PagesState, selectPages } from '../pages.state';

export const selectPurchases = createSelector(
  selectPages,
  (state: PagesState) => state.purchases
);
