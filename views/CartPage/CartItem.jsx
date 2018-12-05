import { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const priceFormater = item =>
  item.product.price !== item.promo_price ? (
    <div>
      <strike style={{ color: "red", margin: 10 + "px" }}>
        {item.product.price}
      </strike>
      <font style={{ color: "green" }}>{item.promo_price}</font>
    </div>
  ) : (
    <div>{item.promo_price}</div>
  );

class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cartItem } = this.props;
    return (
      <Row>
        <Col>
          <StyledImg src={cartItem.product.image} />
        </Col>
        <Col>{cartItem.product.name}</Col>
        <Col>{cartItem.quantity}</Col>
        <Col>{priceFormater(cartItem)}</Col>
        <Col>{cartItem.total_price}</Col>
        <Col>
          <Button onClick={this.props.handleRemoveItem}>
            <i className="fas fa-minus" />
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CartItem;
