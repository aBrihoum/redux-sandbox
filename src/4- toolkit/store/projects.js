import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    ADD_PROJECT: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.description,
      });
    },
    REMOVE_PROJECT: (state, action) =>
      state.filter((el) => el.id !== action.payload.id),
  },
});

export default slice.reducer;
export const { ADD_PROJECT, REMOVE_PROJECT } = slice.actions;
