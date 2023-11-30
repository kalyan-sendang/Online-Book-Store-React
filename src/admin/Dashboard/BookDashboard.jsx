import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getBooks } from "../../services/Routes";
import axiosInstance from "../../../axiosInstance";
import { Link } from "react-router-dom";

const BookDashboard = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getBooks"],
    queryFn: () => getBooks(),
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "id",
        header: "id",
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
        accessorKey: "available",
        header: "available",
        cell: ({ getValue }) => {
          const isAvailable = getValue();
          return <div>{String(isAvailable)}</div>;
        },
      },
      {
        accessorKey: "update",
        header: "Update",
        cell: ({ row }) => (
          <Link
            className="btn btn-primary"
            to={`/admin/updatebook/${row?.original?.id}`}
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
            onClick={() => handleDelete(row.original.id)}
          >
            Delete
          </button>
        ),
      },
    ];
  }, []);

  const handleDelete = (id) => {
    axiosInstance.delete(`/book/${id}`).then(() => {
      refetch();
    });
    console.log(data?.data?.response);
    // console.log(data.filter((book) => book?.id != id));
    console.log("Delete clicked for ID:", id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxHeight: "100vh" }}>
      <DataTable columns={columns} data={data?.data?.response ?? []} />
    </div>
  );
};

export default BookDashboard;
