const { storage, browserAction } = window.chrome;

function saveState(state) {
  if (storage) storage.local.set({ state: JSON.stringify(state) });
}

function setBadge(text) {
  if (browserAction) {
    browserAction.setBadgeText({ text });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge();
    });
    return store;
  };
}
