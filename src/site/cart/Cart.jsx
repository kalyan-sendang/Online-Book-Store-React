import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SingleCart from "./SingleCart";
import { useEffect, useState } from "react";
import { deleteCart, updateCart } from "../../services/Routes";
import {
  emitErrorToast,
  emitSuccessToast,
} from "../components/toastify/toastEmitter";

function Cart() {
  const navigate = useNavigate();
  const cartItemsString = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    JSON.parse(cartItemsString || "[]")
  );
  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const checkoutHandler = () => {
    navigate("/cart/shipping");
  };

  const updateHandler = async (cartId, quantity) => {
    const response = await updateCart(cartId, quantity);
    if (response?.success) {
      const updatedItems = cartItems.map((item) => {
        if (item.cartId === cartId) {
          return { ...item, qty: quantity };
        }
        return item;
      });
      setCartItems(updatedItems);
      emitSuccessToast(response?.message);
    } else {
      emitErrorToast(response?.message);
    }
  };

  const deleteHandler = async (cartId) => {
    const response = await deleteCart(cartId);

    if (response?.success) {
      const carts = cartItems?.filter((item) => item?.cartId !== cartId);
      setCartItems(carts);
      emitSuccessToast(response?.message);
    } else {
      emitErrorToast(response?.message);
    }
  };
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item?.qty * item?.book.price,
      0
    );
    setSubtotal(newSubtotal);
    const quantity = cartItems.reduce((acc, item) => {
      return acc + parseInt(item?.qty);
    }, 0);
    setTotalQuantity(quantity);
  }, [cartItems]);

  return (
    <div className="container">
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <h3>
              Your cart is empty{" "}
              <Link to="/" className="btn btn-primary">
                Go Back
              </Link>
            </h3>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <SingleCart
                  key={index}
                  item={item}
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Subtotal {totalQuantity} items</h2>
                <br></br>
                Rs. {subtotal.toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item
              style={{
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "280px" }}
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
