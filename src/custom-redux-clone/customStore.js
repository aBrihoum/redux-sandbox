function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((el) => el());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}

export default createStore;
