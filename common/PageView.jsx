import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavBar from "./NavBar";

const PageContent = styled.div`
  width: 100%;
  height: 100%;
  min-width: 500px;
  position: relative;
  background-color: coral;
`;

const Content = styled.div``;

class PageView extends Component {
  render() {
    return (
      <PageContent>
        <NavBar/>
        <Content>{this.props.children}</Content>
      </PageContent>
    );
  }
}
PageView.getInitialProps = ({ query }) => ({ data: query });

PageView.propTypes = { children: PropTypes.node.isRequired };

export default PageView;
