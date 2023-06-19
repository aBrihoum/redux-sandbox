import { createSlice } from "@reduxjs/toolkit";

let id = 0;

// createSlice creates action types & action creators

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    ADD_BUG: (state, action) => {
      state.push({
        id: ++id,
        description: action.payload.description,
        resolved: false,
      });
    },
    REMOVE_BUG: (state, action) =>
      state.filter((el) => el.id !== action.payload.id),
    RESOLVE_BUG: (state, action) =>
      state.forEach(
        (el) => el.id === action.payload.id && (el.resolved = true)
      ),
  },
});
export const { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } = slice.actions;
export default slice.reducer;

// selectors ( or getters)

export const selectUnresolvedBugs = (state) =>
  state.bugs.filter((bug) => !bug.resolved);
