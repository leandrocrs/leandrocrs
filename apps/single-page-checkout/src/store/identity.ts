import { createSlice } from '@reduxjs/toolkit';

const identitySlice = createSlice({
  name: 'identity',
  initialState: {},
  reducers: {},
});

export const identityStatePath = identitySlice.name;

export default {
  [identityStatePath]: identitySlice.reducer,
};
