import { createSelector } from '@ngrx/store';

import { PagesState, selectPages } from '../pages.state';

export const selectAccounts = createSelector(
  selectPages,
  (state: PagesState) => state.accounts
);
