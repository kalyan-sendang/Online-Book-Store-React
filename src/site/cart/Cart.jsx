import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleCart from "./SingleCart";
import { useState } from "react";
import { deleteCart, updateCart } from "../../services/Routes";

function Cart() {
  const cartItemsString = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    JSON.parse(cartItemsString || "[]")
  );
  // cartItems.map((item, index) => {
  //   console.log(index, item?.book);
  //   console.log(item);
  // });
  const updateHandler = async (cartId, quantity) => {
    const response = await updateCart(cartId, quantity);
  };
  const deleteHandler = async (cartId) => {
    const response = await deleteCart(cartId);
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <h3>
            Your cart is empty <Link to="/">Go Back</Link>
          </h3>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              // <ListGroup.Item key={item.book}>
              //   <Row>
              //     <Col md={2}>
              //       {/* <Image src={item.image} alt={item.name} fluid rounded /> */}
              //       <Image
              //         src="/src/assets/book1.avif"
              //         alt={item.book.title}
              //         fluid
              //         rounded
              //       />
              //     </Col>
              //     <Col md={3}>
              //       <Link to={`/book/${item.book.bookId}`}>
              //         {item.book.title}
              //       </Link>
              //     </Col>
              //     <Col md={2}>Rs.{item.book.price}</Col>
              //     <Col>
              //       <Form.Control
              //         as="select"
              //         value={item.qty || 1}
              //         onChange={(e) => {
              //           handleQuantityChange(
              //             index,
              //             parseInt(e.target.value, 10)
              //           );
              //         }}
              //       >
              //         {[...Array(item.book.qty).keys()].map((x) => (
              //           <option key={x + 1} value={x + 1}>
              //             {x + 1}
              //           </option>
              //         ))}
              //       </Form.Control>
              //     </Col>
              //     <Col>
              //       <Button
              //         type="button"
              //         variant="light"
              //         onClick={(e) => e.target.value}
              //       >
              //         <i className="fas fa-trash"></i>
              //       </Button>
              //     </Col>
              //   </Row>
              // </ListGroup.Item>
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
    </Row>
  );
}

export default Cart;
