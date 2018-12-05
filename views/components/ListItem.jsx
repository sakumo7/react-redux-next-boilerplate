import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledListItem = styled.div`
  width: 100%;
  background-color: white;
  overflow: auto;
  margin-top: 5px;
  border-radius: 10px;
`;

class ListItem extends Component {
  render() {
    return <StyledListItem>{this.props.children}</StyledListItem>;
  }
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListItem;
