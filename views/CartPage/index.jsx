import React from "react";
import { connect } from "react-redux";
import {
  fetchCart,
  removeCartItem,
  insertPromoCode,
  createOrder
} from "../../services/redux/reducers/products/reducer";
import * as productsSelector from "../../services/redux/reducers/products/selectors";
import PageView from "../../common/PageView";
import Container from "../components/Container";
import List from "../components/List";
import CartItem from "./CartItem";
import CartHeader, { SumaryHeader } from "./CartHeader";
import { ErrorInfo } from "./Errors";
class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      updated: false,
      errors: []
    };
  }

  componentDidMount() {
    this.props.fetchCart(this.state);

    this.handleInsertCode = this.handleInsertCode.bind(this);
    this.handleCreateOrder = this.handleCreateOrder.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.updated !== prevState.updated) {
      this.props.fetchCart(this.props);
    }
  }

  handleInsertCode() {
    this.props.insertPromoCode(this.input.value);
    this.input.value=''
    this.setState({
      updated: !this.state.updated
    });
  }

  handleCreateOrder() {
    this.props.createOrder(this.email.value);
    this.email.value=''
    this.setState({
      updated: !this.state.updated
    });
  }

  handleRemoveItem(itemId) {
    this.props.removeCartItem(itemId);
    this.setState({
      updated: !this.state.updated
    });
  }

  render() {
    const { cart, errors } = this.props;
    const items = cart.items
      ? cart.items.map(item => (
          <CartItem
            key={item.id}
            cartItem={item}
            handleRemoveItem={this.handleRemoveItem.bind(this, item.id)}
          />
        ))
      : null;
    const codes = cart.validated_promo_codes
      ? cart.validated_promo_codes.map(item => (
          <li key={item.id}>
            {item.code} expire_date: {item.expire_date} value: {item.value} %
          </li>
        ))
      : null;
    return (
      <PageView>
        <Container>
          <List>
            <CartHeader />
            {items}
            <hr />
            <SumaryHeader price={cart.total_price} />
            <div>Promo codes:</div>
            {codes}
            <div>
              Code:
              <input type="text" ref={input => (this.input = input)} />
              <button onClick={this.handleInsertCode}>Insert Promo Code</button>
            </div>
            <div>
              Email:
              <input type="email" ref={email => (this.email = email)} />
              <button onClick={this.handleCreateOrder}>Make an Order</button>
            </div>
            <ErrorInfo errors={errors} />
          </List>
        </Container>
      </PageView>
    );
  }
}

CartPage.getInitialProps = ({ query }) => ({ params: query });

CartPage.defaultProps = {
  cart: [],
  errors: []
};

export default connect(
  state => ({
    cart: productsSelector.fetchCart(state),
    errors: productsSelector.insertPromoCode(state),
    errors: productsSelector.createOrder(state)
  }),
  { fetchCart, removeCartItem, insertPromoCode, createOrder }
)(CartPage);
