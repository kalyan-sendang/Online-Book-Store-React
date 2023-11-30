import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleCart({ item, updateHandler, deleteHandler }) {
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState(null);
  useEffect(() => {
    if (item) {
      setCartData(item);
      setQuantity(item?.qty);
    }
  }, [item]);
  return (
    <ListGroup.Item>
      <Row>
        <Col md={2}>
          {/* <Image src={item.image} alt={item.name} fluid rounded /> */}
          <Image
            src="/src/assets/book1.avif"
            alt={item.book.title}
            fluid
            rounded
          />
        </Col>
        <Col md={3}>
          <Link to={`/book/${item?.book?.bookId}`}>{item?.book?.title}</Link>
        </Col>
        <Col md={2}>Rs.{item?.book?.price * quantity}</Col>
        <Col>
          <Form.Control
            as="select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(item?.book?.qty).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Button
            type="button"
            variant="warning"
            onClick={() => updateHandler(item?.cartId, quantity)}
          >
            <i className="fas fa-trash">Update</i>
          </Button>
        </Col>
        <Col>
          <Button type="button" variant="danger" onClick={deleteHandler}>
            <i className="fas fa-trash">Delete</i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default SingleCart;
