import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { addToCart, getBooksById } from "../../services/Routes";
import { Spinner } from "reactstrap";
import Rating from "../Review/Rating";
import { useEffect, useState } from "react";
import ReviewList from "../Review/ReviewList";

const BookPage = () => {
  const [reviews, setReviews] = useState("");
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["getBooks"],
    queryFn: () => getBooksById(id),
  });

  const userProfile = JSON.parse(localStorage.getItem("userprofile"));
  const book = data?.data?.response;

  const [totalNumRating, setTotalNumRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const handleClick = async () => {
    if (userProfile) {
      const response = await addToCart(book?.bookId);

      if (response?.success === true) {
        window.alert("Successfully book added to Cart.");
      } else {
        window.alert("Book is already added to Cart.");
      }
    } else {
      window.alert("Sign in to add Book");
    }
  };

  useEffect(() => {
    setReviews(book?.reviews);
  }, [book]);

  if (isLoading) {
    return (
      <div>
        <Spinner>Loading...</Spinner>
      </div>
    );
  }

  return (
    <div className="container">
      <a href="/" className="btn btn-primary my-3">
        Go Back
      </a>

      <Row>
        <Col md={6}>
          <Image src="/src/assets/book1.avif" fluid />
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{book?.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={averageRating} text={totalNumRating} />
            </ListGroup.Item>

            <ListGroup.Item>Price: Rs.{book.price}</ListGroup.Item>

            <ListGroup.Item>Description: {book.detail}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs.{book?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{book.qty > 0 ? "In Stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              {
                <ListGroup.Item>
                  <Button onClick={handleClick} className="btn w-100">
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              }
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <ReviewList
        profile={userProfile}
        bookId={book?.bookId}
        reviews={reviews}
        setReviews={setReviews}
        setAverageRating={setAverageRating}
        setTotalNumRating={setTotalNumRating}
      />
    </div>
  );
};

export default BookPage;
