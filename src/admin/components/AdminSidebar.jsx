import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="flex-shrink-0 p-3 text-white bg-dark"
      style={{ height: "100vh" }}
    >
      <Link
        to="/admin"
        className="d-flex align-items-center pb-3 mb-3 link-light text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">DashBoard</span>
      </Link>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center text-white rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#users-collapse"
            aria-expanded="false"
          >
            Users
          </button>
          <div
            className="collapse show"
            id="users-collapse"
            style={{ paddingLeft: "20px" }}
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/admin/user" className="link-light rounded">
                  List Users
                </Link>
              </li>
            </ul>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/admin/adduser" className="link-light rounded">
                  AddUser
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center text-white rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#books-collapse"
            aria-expanded="false"
          >
            Books
          </button>
          <div
            className="collapse"
            id="books-collapse"
            style={{ paddingLeft: "20px" }}
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/admin/book" className="link-light rounded">
                  List Books
                </Link>
              </li>
            </ul>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/admin/addbook" className="link-light rounded">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center text-white rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Orders
          </button>
          <div
            className="collapse"
            id="orders-collapse"
            style={{ paddingLeft: "20px" }}
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link href="#" className="link-light rounded">
                  New
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Processed
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Shipped
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Returned
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center text-white rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            Account
          </button>
          <div
            className="collapse"
            id="account-collapse"
            style={{ paddingLeft: "20px" }}
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link href="#" className="link-light rounded">
                  New...
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="#" className="link-light rounded">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
