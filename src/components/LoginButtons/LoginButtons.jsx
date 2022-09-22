import { Link } from "react-router-dom";

export default function LoginButtons() {
  return (
    <ul className="menu">
      <li>
        <Link to="/Login" className="active">
          Login
        </Link>
      </li>
      <li>
        <Link to="/Register-customer" className="active">
          Register
        </Link>
      </li>
    </ul>
  );
}
