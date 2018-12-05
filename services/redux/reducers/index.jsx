import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import productsReducer from "./products/reducer";
import productsSagas from "./products/saga";

export const rootReducer = combineReducers({
  products: productsReducer
});

export function* rootSaga() {
  yield all([
    ...productsSagas
  ]);
}
