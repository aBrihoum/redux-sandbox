import { createReducer } from "@reduxjs/toolkit";
// --------------- old way without createSlice  ---------------
// Action Creators
export const addBug = createAction("ADD_BUG");
export const removeBug = createAction("REMOVE_BUG");
export const resolveBug = createAction("RESOLVE_BUG");

// Reducer
export default createReducer([], {
  // key:value || keys are actions, values are functions
  // addBug.type = "ADD_BUG"
  [addBug.type]: (state, action) => {
    state.push({
      id: ++id,
      description: action.payload.description,
      resolved: false,
    });
  },
  [removeBug.type]: (state, action) => {
    state = state.filter((el) => el.id !== action.payload.id);
  },
  [resolveBug.type]: (state, action) => {
    const index = state.findIndex((el) => el.id === action.payload.id);
    state[index].resolved = true;
  },
});
