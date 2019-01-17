import { PurchaseState } from './purchases.model';
import { PurchaseActions, PurchaseActionTypes } from './purchases.action';

export const initialState: PurchaseState = {
  loading: false,
  purchases: []
};

export function purchaseReducer(
  state: PurchaseState = initialState,
  action: PurchaseActions
): PurchaseState {
  switch (action.type) {
    case PurchaseActionTypes.GET:
      return {
        ...state,
        loading: true,
        purchases: null,
        error: null
      };

    case PurchaseActionTypes.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        purchases: action.payload.purchases,
        error: null
      };

    case PurchaseActionTypes.GET_ERROR:
      return {
        ...state,
        loading: false,
        purchases: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}
