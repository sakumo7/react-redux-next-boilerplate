import * as actions from "./actions";
import { SUCCESS, FAILURE } from "../../utils/actionSuffixes";

const InitialState = {
  productsList: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  product: {
    id: null,
    name: null,
    description: null,
    price: null,
    image: null
  },
  ordersList: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  cart: [],
  errors: []
};

export default function productsReducer(state = InitialState, action) {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_LIST + SUCCESS:
      return { ...state, productsList: action.payload.response };
    case actions.ADD_CART_ITEM + SUCCESS:
      return { ...state };
    case actions.FETCH_CART + SUCCESS:
      return { ...state, cart: action.payload.response };
    case actions.REMOVE_CART_ITEM + SUCCESS:
      return { ...state, cart: action.payload.response };
    case actions.INSERT_PROMO_CODE + SUCCESS:
      return { ...state, errors: [] };
    case actions.CREATE_ORDER + SUCCESS:
      return { ...state, errors: []  };
    case actions.CREATE_ORDER + FAILURE:
      return { ...state, errors: action.error.response };
    case actions.INSERT_PROMO_CODE + FAILURE:
      return { ...state, errors: action.error.response };
    case actions.FETCH_ORDERS_LIST + SUCCESS:
      return { ...state, ordersList: action.payload.response };
    default:
      return state;
  }
}

export const fetchProductsList = params => ({
  type: actions.FETCH_PRODUCTS_LIST,
  params
});

export const fetchOrdersList = params => ({
  type: actions.FETCH_ORDERS_LIST,
  params
});

export const addCartItem = (quantity, product) => ({
  type: actions.ADD_CART_ITEM,
  quantity,
  product
});

export const fetchCart = params => ({
  type: actions.FETCH_CART,
  params
});

export const removeCartItem = itemId => ({
  type: actions.REMOVE_CART_ITEM,
  itemId
});

export const insertPromoCode = code => ({
  type: actions.INSERT_PROMO_CODE,
  code
});

export const createOrder = email => ({
  type: actions.CREATE_ORDER,
  email
});
