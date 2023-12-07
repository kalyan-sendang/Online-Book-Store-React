import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import Toastify from "../site/components/toastify/Toastify";

const AdminLayout = () => {
  return (
    <>
      <Toastify />
      <div className="container mt-2" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-2">
            <AdminSidebar />
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
