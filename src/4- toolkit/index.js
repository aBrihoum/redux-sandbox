import configureStore from "./store/configureStore";
import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./store/bugs";

const store = configureStore();
store.subscribe(() => {
  console.log("store changed ! ", store.getState());
});

store.dispatch(ADD_BUG({ description: "BUG 1" }));
store.dispatch(ADD_BUG({ description: "BUG 2" }));
store.dispatch(ADD_BUG({ description: "BUG 3" }));
store.dispatch(RESOLVE_BUG({ id: 1 }));
store.dispatch(REMOVE_BUG({ id: 1 }));
