import { Link } from "react-router-dom";

function WelcomeDashBoard() {
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        HomePage
      </Link>

      <div
        style={{
          margin: "25%",
        }}
      >
        <h1>Welcome To Admin DashBoard</h1>
      </div>
    </div>
  );
}

export default WelcomeDashBoard;
