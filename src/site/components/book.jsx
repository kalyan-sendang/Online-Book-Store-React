// import Rating from './Rating'
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/Routes";
import { useEffect, useState } from "react";

function Book({ book }) {
  const handleClick = async () => {
    const response = await addToCart(book.bookId);
    if (response?.success === true) {
      window.alert("Successfully book added to Cart.");
    } else {
      window.alert("Book is already added to Cart.");
    }
  };

  return (
    <Card className="my-3 p-3 rounded ">
      <Link to={`/book/${book.bookId}`}>
        <Card.Img src={"/src/assets/book1.avif"} />
      </Link>

      <Card.Body>
        <Link to={`/book/${book.bookId}`} style={{ textDecoration: "none" }}>
          <Card.Title as="div">
            <strong>{book.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {/* <Rating value={book.rating} text={`${book.numReviews}reviews`} color={`#f8e825`} /> */}
            <p style={{ color: "#696969" }}>4.5 from 10 reviews</p>
          </div>
        </Card.Text>
        <Card.Text as="h3">Rs.{book.price}</Card.Text>
        <Row>
          <Col>
            <Card.Text as="p">Genre: {book.genre}</Card.Text>
          </Col>
          <Col>
            {
              <ListGroup.Item>
                <Button
                  onClick={handleClick}
                  className={"btn w-100"}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            }
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Book;
