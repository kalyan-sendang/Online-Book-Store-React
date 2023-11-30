import React from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCart } from "../../services/getCart";

function Cart() {

  const cartItemsString = localStorage.getItem("cart");
  const cartItems = JSON.parse(cartItemsString || '[]');
  console.log(cartItems)

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <h3>
            Your cart is empty <Link to='/'>Go Back</Link>
          </h3>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.book}>
                <Row>
                  <Col md={2}>
                    {/* <Image src={item.image} alt={item.name} fluid rounded /> */}
                    <Image src="/src/assets/book1.avif" alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/book/${item.book}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => e.target.value}
                    >
                      {[...Array(item.qty).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={(e) => e.target.value}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

export default Cart;
