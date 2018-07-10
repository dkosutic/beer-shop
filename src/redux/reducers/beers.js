import * as actionTypes from "../actions/actionTypes";

export function beerReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return state.map(element => {
        if (element.id === action.item.id) {
          return {
            ...element,
            favorite: !element.favorite
          };
        } else {
          return element;
        }
      });
    case actionTypes.LOAD_ITEMS:
      return action.items;
    default:
      return state;
  }
}

export function cartReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let found = state.find(item => item.id === action.item.id);
      if (found) {
        return state.map(element => {
          if (element.id === found.id) {
            return {
              ...element,
              quantity: element.quantity + 1
            };
          }
          return element;
        });
      }
      return [
        ...state,
        {
          ...action.item,
          quantity: 1
        }
      ];
    case actionTypes.REMOVE_FROM_CART:
      return state.filter(element => element.id !== action.item.id);
    case actionTypes.REMOVE_ALL_FROM_CART:
      return [];
    case actionTypes.UPDATE_CART_ITEM:
      return state.map(element => {
        if (element.id === action.item.id) {
          return {
            ...action.item
          };
        }
        return element;
      });
    default:
      return state;
  }
}

export function modalReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { open: true, item: { ...action.item } };
    case actionTypes.CLOSE_MODAL:
      return { open: false, item: {} };
    case actionTypes.UPDATE_MODAL:
      return {
        ...state,
        item: { ...action.item, favorite: !action.item.favorite }
      };
    default:
      return state;
  }
}
