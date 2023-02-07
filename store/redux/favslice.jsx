import {createSlice} from '@reduxjs/toolkit';

export const favslice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favslice;
export const addFavorite = favslice.actions.addFavorite;
export const removeFavorite = favslice.actions.removeFavorite;
