import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import Book from "../components/book";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/book");
        const data = response?.data?.response;
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="container">
      <h1>Latest Books</h1>
      <div>
        <Row>
          {books.map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
