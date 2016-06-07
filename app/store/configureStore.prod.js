import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import storage from '../middlewares/storage';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  storage()
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  store.runSaga = sagaMiddleware.run;
  return store;
}
