import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import configureStore from 'store/configureStore';
import sagas from 'sagas';
import './style.css';

chrome.storage.local.get('state', ({ state }) => {
  const initialState = { settings: JSON.parse(state || '{}') };
  const store = configureStore(initialState);
  store.runSaga(sagas);

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
  );
});
