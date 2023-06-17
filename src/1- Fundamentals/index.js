import store from "./store";
import { addBug, removeBug, resolveBug } from "./actions";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addBug("BUG 1"));
store.dispatch(addBug("BUG 2"));
store.dispatch(addBug("BUG 3"));

store.dispatch(resolveBug(1));
