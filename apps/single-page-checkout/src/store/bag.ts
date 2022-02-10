import { createSlice } from '@reduxjs/toolkit';

const bagSlice = createSlice({
  name: 'bag',
  initialState: {},
  reducers: {},
});

export const bagStatePath = bagSlice.name;

export default {
  [bagStatePath]: bagSlice.reducer,
};
