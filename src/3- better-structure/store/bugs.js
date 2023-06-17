// Action Types
const ADD_BUG = "ADD_BUG";
const REMOVE_BUG = "REMOVE_BUG";
const RESOLVE_BUG = "RESOLVE_BUG";

// Action Creators
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: { description },
});

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload: { id },
});

export const resolveBug = (id) => ({
  type: RESOLVE_BUG,
  payload: { id },
});

// Reducer

let id = 0;

export default function reducer(state = [], action) {
  if (action.type === ADD_BUG)
    return [
      ...state,
      {
        id: ++id,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === REMOVE_BUG)
    return state.filter((el) => el.id !== action.payload.id);
  else if (action.type === RESOLVE_BUG)
    return state.map((el) =>
      el.id == action.payload.id ? { ...el, resolved: true } : el
    );

  return state;
}
