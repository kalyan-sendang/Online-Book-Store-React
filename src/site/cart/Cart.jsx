import React from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  {/* <Image src={item.image} alt={item.name} fluid rounded /> */}
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
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
      </Col>
    </Row>
  );
}

export default Cart;
