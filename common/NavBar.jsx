import React, { Component } from "react";
import { Link } from "../routes";
import styled from "styled-components";

const CategoryText = styled.a`
  margin: 10px;
`;

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>NavBar</div>
        <Link route="index">
          <CategoryText href={`/`}>Products</CategoryText>
        </Link>
        <Link route="cart">
          <CategoryText href={`/cart`}>Cart</CategoryText>
        </Link>

        <Link route="orders">
          <CategoryText href={`/orders`}>Orders History</CategoryText>
        </Link>
      </div>
    );
  }
}

export default NavBar;
