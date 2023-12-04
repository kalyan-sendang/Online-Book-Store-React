import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import Book from "../components/book";
import { Col, Pagination, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();
  const [totalPage, setTotalpage] = useState(1);

  const fetchBooks = async (page) => {
    try {
      const response = await axiosInstance.get(`/book?pageNo=${page}`);

      const data = response?.data;

      //no. of books
      const books = data?.response;
      setBooks(books);
      //total books
      const total = data?.totalPages;
      setTotalpage(total);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    fetchBooks(queryParams.get("page") || 1);
  }, [queryParams]);

  const handlePageChange = (pageNum) => {
    setQueryParams({ page: pageNum });
  };

  const handlePrevClick = () => {
    const pageNo = queryParams.get("page");

    if (pageNo > 1) {
      setQueryParams({ page: pageNo - 1 });
    }
  };

  const handleNextClick = () => {
    const pageNo = parseInt(queryParams.get("page"));

    if (pageNo < totalPage) {
      setQueryParams({ page: pageNo + 1 });
    }
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
          <Pagination.Prev onClick={handlePrevClick} />
          {Array.from({ length: totalPage }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === queryParams.get("page")}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={handleNextClick} />
        </Pagination>
      </div>
    </div>
  );
};

export default HomePage;
