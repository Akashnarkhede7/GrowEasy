import { Link } from "react-router-dom";
import './NewApp.css';

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item m-1">
        <Link to="/" className="nav-link active">
          <b className="text-color abc">Home</b>
        </Link>
      </li>
      <li className="nav-item m-1">
        <Link to="/user/register" className="nav-link active" aria-current="page">
          <b className="text-color abc">Register</b>
        </Link>
      </li>
      <li className="nav-item m-1">
        <Link to="/about" className="nav-link active" aria-current="page">
          <b className="text-color abc">About</b>
        </Link>
      </li>
      <li className="nav-item m-1">
        <Link to="/contact" className="nav-link active" aria-current="page">
          <b className="text-color abc">Contact</b>
        </Link>
      </li>
      <li className="nav-item m-1">
        <Link to="/user/login" className="nav-link active" aria-current="page">
          <button type="button" className="btn btn-success xyz">Login</button>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
