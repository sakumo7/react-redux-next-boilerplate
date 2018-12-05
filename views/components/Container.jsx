import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: grey;
`;

const Container = props => <StyledContainer>{props.children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
