import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.div`
  height: 100vh;
  margin: auto;
  width: 80%;
  border: 3px solid green;
  padding: 10px;
  justify-content: center;
  background-color: white;
`;

const List = props => <StyledList>{props.children}</StyledList>;

List.propTypes = {
  children: PropTypes.node.isRequired
};

export default List;
