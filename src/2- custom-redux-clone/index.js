import store from "./store";
import { addBug, removeBug, resolveBug } from "./actions";

store.subscribe(() => {
  console.log("store changed ! ", store.getState());
});

store.dispatch(addBug("BUG 1"));

store.dispatch(removeBug(1));
