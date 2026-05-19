import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "15px",
          listStyleType: "none",
          gap: "20px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            ABOUT US
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
