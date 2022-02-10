import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {},
  reducers: {},
});

export const shippingStatePath = shippingSlice.name;

export default {
  [shippingStatePath]: shippingSlice.reducer,
};
