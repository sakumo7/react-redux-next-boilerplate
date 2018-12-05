 ""import { Row, Col } from "reactstrap";

const CartHeader = ({}) => (
  <Row>
    <Col>Image</Col>
    <Col>Name</Col>
    <Col>Quantity</Col>
    <Col>Price per unit</Col>
    <Col>Price</Col>
    <Col />
  </Row>
);

const SumaryHeader = ({ price }) => (
  <Row>
    <Col />
    <Col />
    <Col />
    <Col>Total Price: </Col>
    <Col>{price}</Col>
    <Col />
  </Row>
);

export default CartHeader;
export { SumaryHeader };
