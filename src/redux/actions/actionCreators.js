import * as actionTypes from '../actions/actionTypes';

export function addToCart(item) {
    return {
        type: actionTypes.ADD_TO_CART,
        item
    }
}

export function removeFromCart(item) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        item
    }
}

export function removeAllFromCart() {
    return {
        type: actionTypes.REMOVE_ALL_FROM_CART
    }
}

export function toggleFavorite(item) {
    return {
        type: actionTypes.TOGGLE_FAVORITE,
        item
    }
}

export function updateItemInCart(item) {
    return {
        type: actionTypes.UPDATE_CART_ITEM,
        item
    }
}

export function loadItems(items) {
    return {
        type: actionTypes.LOAD_ITEMS,
        items
    }
}

export function openModal(item) {
    return {
        type: actionTypes.OPEN_MODAL,
        item
    }
}

export function closeModal() {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export function updateModal(item) {
    return {
        type: actionTypes.UPDATE_MODAL,
        item
    }
}