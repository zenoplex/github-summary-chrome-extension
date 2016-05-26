import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import configureStore from '../../app/store/configureStore';
import sagas from '../../app/sagas';
import './style.css';

chrome.storage.local.get('state', ({ state }) => {
  const initialState = JSON.parse(state || '{}');
  const store = configureStore(initialState);
  store.runSaga(sagas);

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
  );
});
