import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import storage from '../middlewares/storage';

const enhancer = compose(
  applyMiddleware(createSagaMiddleware()),
  storage()
);

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
