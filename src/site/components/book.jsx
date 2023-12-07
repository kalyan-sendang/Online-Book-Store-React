// import Rating from './Rating'
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/Routes";
import Rating from "../Review/Rating";
import { emitInfoToast, emitSuccessToast } from "./toastify/toastEmitter";

function Book({ book }) {
  const userProfile = localStorage.getItem("userprofile");
  const handleClick = async () => {
    if (userProfile) {
      const response = await addToCart(book.bookId);
      if (response?.success === true) {
        emitSuccessToast(response?.message);
      } else {
        emitInfoToast(response?.message);
      }
    } else {
      emitInfoToast("Sign in to add Book");
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
            <Rating
              value={book?.overallRating}
              text={book?.numberOfReviews}
              color={`#f8e825`}
            />
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
                <Button onClick={handleClick} className="btn w-100">
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
