import { createSelector } from '@ngrx/store';

import { PagesState, selectPages } from '../pages.state';
import { AccountState, PaymentState } from './account.model';

export const selectAccountState = createSelector(
  selectPages,
  (state: PagesState) => state.accounts
);

export const selectAccountStateAccountInfos = createSelector(
  selectAccountState,
  (state: AccountState) => state.accountInfos
);

export const selectAccountStatePaymentInfo = createSelector(
  selectAccountState,
  (state: AccountState) => state.paymentInfo
);

export const selectAccountStatePersonalInfoLabels = createSelector(
  selectAccountState,
  (state: AccountState) => state.personalInfoLabels
);

export const selectAccountStateNotificationLabels = createSelector(
  selectAccountState,
  (state: AccountState) => state.notificationLabels
);
