import { createStore } from "redux";
import reducer from "./reducer";

const bugsStore = createStore(reducer);

export default bugsStore;
