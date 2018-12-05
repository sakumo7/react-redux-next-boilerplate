import React from "react";
import { connect } from "react-redux";
import { fetchProductsList } from "../../services/redux/reducers/products/reducer";
import * as productsSelector from "../../services/redux/reducers/products/selectors";
import PageView from "../../common/PageView";
import Container from "../components/Container";
import List from "../components/List";
import ListItemProduct from "../components/ListItemProduct";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProductsList(this.props.params);
  }
  render() {
    const { productsList } = this.props;
    const itemsList = productsList.map(item => <ListItemProduct key={item.id} product={item}/>);
    return (
      <PageView>
        <Container>
          <List>{itemsList}</List>
        </Container>
      </PageView>
    );
  }
}

ProductsPage.getInitialProps = ({ query }) => ({ params: query });

ProductsPage.defaultProps = {
  productsList: []
};

export default connect(
  state => ({ productsList: productsSelector.getProductsListResults(state) }),
  { fetchProductsList }
)(ProductsPage);
