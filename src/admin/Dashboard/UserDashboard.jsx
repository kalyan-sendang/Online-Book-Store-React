import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getUsers } from "../../services/Routes";
import axiosInstance from "../../../axiosInstance";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(),
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
        accessorKey: "username",
        header: "username",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "email",
        header: "email",
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
            to={`/admin/updateuser/${row?.original?.id}`}
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
    axiosInstance.delete(`/user/${id}`).then(() => {
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

export default UserDashboard;
