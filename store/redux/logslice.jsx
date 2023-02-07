import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isClicked: false,
};

export const logslice = createSlice({
  name: 'logslice',
  initialState,
  reducers: {
    login: state => {
      state.isClicked = true;
    },
    logout: state => {
      state.isClicked = false;
    },
  },
});

export const {login, logout} = logslice.actions;
export default logslice.reducer;
