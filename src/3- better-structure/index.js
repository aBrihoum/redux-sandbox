import configureStore from "./store/configureStore";
import { addBug, removeBug, resolveBug } from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed ! ", store.getState());
});

store.dispatch(addBug("BUG 1"));
store.dispatch(addBug("BUG 2"));
store.dispatch(addBug("BUG 3"));
store.dispatch(resolveBug(1));
