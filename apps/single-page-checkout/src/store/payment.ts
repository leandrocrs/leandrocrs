import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {},
  reducers: {},
});

export const paymentStatePath = paymentSlice.name;

export default {
  [paymentStatePath]: paymentSlice.reducer,
};
