/* eslint-disable no-console, require-yield */
import { takeLatest, call, put } from "redux-saga/effects";
import { mapSuccess, mapFailure } from "../../utils/mapResponse";
import * as actions from "./actions";
import * as api from "./api";

function* fetchProductsList({ params }) {
  try {
    const response = yield call(api.fetchProductsList, params);
    yield put(mapSuccess(response, actions.FETCH_PRODUCTS_LIST));
  } catch (e) {
    yield put(mapFailure(e, actions.FETCH_PRODUCTS_LIST));
  }
}

export function* addCartItem({ quantity, product }) {
  try {
    const response = yield call(api.addCartItem, quantity, product);
    yield put(mapSuccess(response, actions.ADD_CART_ITEM));
  } catch (e) {
    yield put(mapFailure(e, actions.ADD_CART_ITEM));
  }
}

export function* removeCartItem({ itemId }) {
  try {
    const response = yield call(api.removeCartItem, itemId);
    const response2 = yield call(api.fetchCart, itemId);
    yield put(mapSuccess(response2, actions.REMOVE_CART_ITEM));
  } catch (e) {
    yield put(mapFailure(e, actions.REMOVE_CART_ITEM));
  }
}

export function* fetchCart({ params }) {
  try {
    const response = yield call(api.fetchCart, params);
    yield put(mapSuccess(response, actions.FETCH_CART));
  } catch (e) {
    yield put(mapFailure(e, actions.FETCH_CART));
  }
}

export function* insertPromoCode({ code }) {
  try {
    const response = yield call(api.insertPromoCode, code);
    yield put(mapSuccess(response, actions.INSERT_PROMO_CODE));
  } catch (e) {
    yield put(mapFailure(e, actions.INSERT_PROMO_CODE));
  }
}

export function* createOrder({ email }) {
  try {
    const response = yield call(api.createOrder, email);
    const response2 = yield call(api.fetchOrdersList, email);
    yield put(mapSuccess(response2, actions.CREATE_ORDER));
  } catch (e) {
    yield put(mapFailure(e, actions.CREATE_ORDER));
  }
}

export function* fetchOrdersList({ params }) {
  try {
    const response = yield call(api.fetchOrdersList, params);
    yield put(mapSuccess(response, actions.FETCH_ORDERS_LIST));
  } catch (e) {
    yield put(mapFailure(e, actions.FETCH_ORDERS_LIST));
  }
}

export default [
  takeLatest(actions.FETCH_PRODUCTS_LIST, fetchProductsList),
  takeLatest(actions.ADD_CART_ITEM, addCartItem),
  takeLatest(actions.REMOVE_CART_ITEM, removeCartItem),
  takeLatest(actions.FETCH_CART, fetchCart),
  takeLatest(actions.INSERT_PROMO_CODE, insertPromoCode),
  takeLatest(actions.CREATE_ORDER, createOrder),
  takeLatest(actions.FETCH_ORDERS_LIST, fetchOrdersList)
];
