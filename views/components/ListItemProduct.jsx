import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import styled from "styled-components";
import { addCartItem } from "../../services/redux/reducers/products/api";

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding 10px;
  border-radius: 10px;
  float: left;
`;

const NameDiv = styled.div`
  padding: 10px;
  font-weight: bold;
`;

const DecriptionDiv = styled.div`
  font-size: 12px;
  height: 100px;
`;

const PriceDiv = styled.div``;

const StyledButton = styled.button`
  text-align: center;
  border-radius: 10px;
  margin-right: 10px;
  float: right;
  & i {
    padding: 5px 0;
  }
`;

const StyledCounter = styled.div`
  text-align: center;
  border-radius: 10px;
  margin-right: 10px;
  float: right;
  & i {
    padding: 5px 0;
  }
`;

class ListItemProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
  }

  handleClickAdd() {
    this.setState({
      counter:
        this.state.counter < this.props.product.quantity
          ? this.state.counter + 1
          : this.state.counter
    });
  }

  handleClickRemove() {
    this.setState({
      counter:
        this.state.counter > 0 ? this.state.counter - 1 : this.state.counter
    });
  }

  handleClickAddToCart() {
    if (this.state.counter > 0) {
      addCartItem(this.state.counter, this.props.product.id).then(
        response => response
      );
      this.setState({ counter: 0 });
    }
  }

  render() {
    const { product } = this.props;
    return (
      <ListItem
        route
        key={product.id}
        routePage="products/details"
        routeUrl="/products/"
        id={product.id}
        name={product.name}
      >
        <StyledImg src={product.image} />
        <NameDiv>{product.name}</NameDiv>
        <DecriptionDiv>{product.description}</DecriptionDiv>
        <PriceDiv>Price: {product.price} $ </PriceDiv>
        <StyledButton onClick={this.handleClickAddToCart}>
          <i className="fas fa-cart-plus" /> Add To Cart
        </StyledButton>
        <StyledCounter>{this.state.counter}</StyledCounter>
        <StyledButton onClick={this.handleClickRemove}>
          <i className="fas fa-minus" />
        </StyledButton>
        <StyledButton onClick={this.handleClickAdd}>
          <i className="fas fa-plus" />
        </StyledButton>
      </ListItem>
    );
  }
}
ListItemProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default ListItemProduct;
