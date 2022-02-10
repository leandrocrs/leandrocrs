import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bagReducer, { bagStatePath } from './bag';
import identityReducer, { identityStatePath } from './identity';
import shippingReducer, { shippingStatePath } from './shipping';
import paymentReducer, { paymentStatePath } from './payment';

const rootReducer = combineReducers({
  ...bagReducer,
  ...shippingReducer,
  ...identityReducer,
  ...paymentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export const selectBagState = (state: RootState) => state[bagStatePath];

export const selectShippingState = (state: RootState) =>
  state[shippingStatePath];

export const selectIdentityState = (state: RootState) =>
  state[identityStatePath];

export const selectPaymentState = (state: RootState) => state[paymentStatePath];
