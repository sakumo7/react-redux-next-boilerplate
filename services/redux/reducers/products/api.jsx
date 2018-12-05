import request from "superagent";
import template from "string-template";
import proxyApiEndpoints from "../../utils/proxyApiEndpoints";

const Endpoints = proxyApiEndpoints({
  FETCH_PRODUCTS_LIST: "/products/",
  CREATE_ORDER: "/orders/",
  CART_ITEMS_LIST: "/cart/items/",
  CART_ITEM: "/cart/items/{itemId}",
  ORDERS: "/orders/",
  FETCH_CART: "/cart/",
  INSERT_PROMO_CODE: "/cart/promocodes/"
});

export const fetchProductsList = params =>
  request.get(Endpoints.FETCH_PRODUCTS_LIST, params);

export const addCartItem = (quantity, product) =>
  request.post(Endpoints.CART_ITEMS_LIST).send({ quantity, product });

export const fetchCart = params => request.get(Endpoints.FETCH_CART, params);

export const removeCartItem = itemId =>
  request.delete(template(Endpoints.CART_ITEM, { itemId }));

export const createOrder = email =>
  request.post(Endpoints.CREATE_ORDER).send({ email });

export const fetchOrdersList = params =>
  request.get(Endpoints.ORDERS, { params });

export const insertPromoCode = code => request.post(Endpoints.INSERT_PROMO_CODE).send({code});
