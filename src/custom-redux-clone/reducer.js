import * as actions from "./actions.model";

let id = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.ADD_BUG)
    return [
      ...state,
      {
        id: ++id,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.REMOVE_BUG)
    return state.filter((el) => el.id !== action.payload.id);
  else if (action.type === actions.RESOLVE_BUG)
    return state.map((el) =>
      el.id == action.payload.id ? { ...el, resolved: true } : el
    );

  return state;
}
