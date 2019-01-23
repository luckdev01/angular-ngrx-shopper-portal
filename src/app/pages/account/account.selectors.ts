import { createSelector } from '@ngrx/store';

import { PagesState, selectPages } from '../pages.state';
import { AccountState, PaymentState } from './account.model';

export const selectAccountState = createSelector(
  selectPages,
  (state: PagesState) => state.accounts
);

export const selectAccountInfoLoading = createSelector(
  selectAccountState,
  (state: AccountState) => state.accountInfoLoading
);

export const selectAccountInfos = createSelector(
  selectAccountState,
  (state: AccountState) => state.accountInfos
);

export const selectAccountInfoError = createSelector(
  selectAccountState,
  (state: AccountState) => state.accountInfoError
);

export const selectPaymentInfoLoading = createSelector(
  selectAccountState,
  (state: AccountState) => state.paymentInfoLoading
);

export const selectPaymentInfo = createSelector(
  selectAccountState,
  (state: AccountState) => state.paymentInfo
);

export const selectPaymentInfoError = createSelector(
  selectAccountState,
  (state: AccountState) => state.paymentInfoError
);

export const selectPersonalInfoLabelsLoading = createSelector(
  selectAccountState,
  (state: AccountState) => state.personalInfoLoading
);

export const selectPersonalInfoLabels = createSelector(
  selectAccountState,
  (state: AccountState) => state.personalInfoLabels
);

export const selectPersonalInfoLabelsError = createSelector(
  selectAccountState,
  (state: AccountState) => state.personalInfoError
);

export const selectNotificationLabelsLoading = createSelector(
  selectAccountState,
  (state: AccountState) => state.notificationLoading
);

export const selectNotificationLabels = createSelector(
  selectAccountState,
  (state: AccountState) => state.notificationLabels
);

export const selectNotificationLabelsError = createSelector(
  selectAccountState,
  (state: AccountState) => state.notificationError
);
