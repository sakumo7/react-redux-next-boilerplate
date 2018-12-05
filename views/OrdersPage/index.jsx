import React from "react";
import { connect } from "react-redux";
import { fetchOrdersList } from "../../services/redux/reducers/products/reducer";
import * as productsSelector from "../../services/redux/reducers/products/selectors";
import PageView from "../../common/PageView";
import Container from "../components/Container";
import List from "../components/List";
import { Table } from "reactstrap";
import ListItemOrder from "../components/ListItemOrder";
import styled from "styled-components";

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.fetchOrdersList(this.props.params);
  }
  render() {
    const { ordersList } = this.props;
    const items = ordersList.results
      ? ordersList.results.map(item => (
          <ListItemOrder key={item.id} order={item} />
        ))
      : null;

    return (
      <PageView>
        <Container>
          <List>
            <Table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Details</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </Table>
          </List>
        </Container>
      </PageView>
    );
  }
}

OrdersPage.getInitialProps = ({ query }) => ({ params: query });

OrdersPage.defaultProps = {
  ordersList: []
};

export default connect(
  state => ({
    ordersList: productsSelector.getOrdersList(state)
  }),
  { fetchOrdersList }
)(OrdersPage);
