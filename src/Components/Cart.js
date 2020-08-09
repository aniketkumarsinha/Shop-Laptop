import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";
import "./Cart.css"

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-info text-center">Your Cart</h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.mediumImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <p>Price :- {item.productPrice}</p>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is Rs.{amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Complete your order!
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h2 className="text-warning text-center italics"><i>Cart is empty</i></h2>
      )}
    </Container>
  );
};

export default Cart;
