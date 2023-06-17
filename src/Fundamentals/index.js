import { addBug, removeBug, resolveBug } from "./actions";
import store from "./store";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addBug("BUG 1"));

store.dispatch(resolveBug(1));

store.dispatch(removeBug(1));
