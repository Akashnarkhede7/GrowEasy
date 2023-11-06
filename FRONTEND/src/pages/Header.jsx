import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.jpeg";
import './NewApp.css';
const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light bg-light text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />&nbsp;&nbsp;
          <Link to="/" class="navbar-brand">
            <i>
             
              <b class="text-success abc display-6 fw-bold">GrowEasy</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
