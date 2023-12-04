import { useEffect, useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import axiosInstance from "../../../axiosInstance";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const BookDashboard = () => {
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

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "bookId",
        header: "bookId",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "title",
        header: "title",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "genre",
        header: "genre",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },

      {
        accessorKey: "author",
        header: "author",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "price",
        header: "price",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "qty",
        header: "qty",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "update",
        header: "Update",
        cell: ({ row }) => (
          <Link
            className="btn btn-primary"
            to={`/admin/updatebook/${row?.original?.bookId}`}
          >
            Update
          </Link>
        ),
      },
      {
        accessorKey: "delete",
        header: "Delete",
        cell: ({ row }) => (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleDelete(row.original.bookId)}
          >
            Delete
          </button>
        ),
      },
    ];
  }, []);

  const handleDelete = async (bookId) => {
    const response = await axiosInstance
      .delete(`/auth/book/${bookId}`)
      .then((res) => res?.data)
      .catch(() => null);
    if (response?.success) {
      //filter
      //setBooks
      const data = response?.data;
      const books = data.filter((item) => item.bookId !== bookId);
      setBooks(books);
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div style={{ maxHeight: "100vh" }}>
      <DataTable columns={columns} data={books ?? []} />
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
  );
};

export default BookDashboard;
