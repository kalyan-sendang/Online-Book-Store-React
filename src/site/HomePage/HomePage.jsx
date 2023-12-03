import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import Book from "../components/book";
import { Col, Pagination, Row } from "react-bootstrap";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalpage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get(`/book?pageNo=${pageNo}`);

        const data = response?.data?.response;
        //no. of books
        const books = data?.books;
        setBooks(books);
        //total books
        const total = data?.totalPages;
        setTotalpage(total);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [pageNo]);

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  };

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
        <Pagination style={{ float: "right" }}>
          {Array.from({ length: totalPage }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === pageNo}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default HomePage;
