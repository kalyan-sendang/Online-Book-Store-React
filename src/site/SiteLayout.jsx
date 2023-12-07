import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Toastify from "./components/toastify/Toastify";

const SiteLayout = () => {
  return (
    <div>
      <Toastify />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SiteLayout;
