import React from "react";
import PropTypes from "prop-types";


const ItemRow = props => {
  return (
    <li>
      {props.item.product.name} {props.item.quantity} units for{" "}
      {props.item.total_price} $
    </li>
  );
};

class ListItemOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { order } = this.props;
    const items = order.cart.items
      ? order.cart.items.map(item => <ItemRow key={item.id} item={item} />)
      : "EMPTY";
    return (

        <tr>
          <td>{order.email}</td>
          <td>
            <ul>{items}</ul>
          </td>
          <td>{order.cart.total_price}$</td>
        </tr>
    );
  }
}

ListItemOrder.propTypes = {
  order: PropTypes.shape({}).isRequired
};

export default ListItemOrder;
