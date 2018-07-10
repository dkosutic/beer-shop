import { createStore, combineReducers } from "redux";

import { beerReducer, cartReducer, modalReducer } from "./reducers/beers";

const reducers = combineReducers({
  items: beerReducer,
  cart: cartReducer,
  modal: modalReducer
});

const defaultState = {
  items: [],
  cart: [],
  modal: { open: false, item: {} }
};

const store = createStore(reducers, defaultState);

export default store;
