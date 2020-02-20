import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);
