import { Link, /*useNavigate*/ } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './NewApp.css';
const AdminHeader = () => {
  // let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("isAdminLoggedIn");
    // sessionStorage.clear();
                               
    window.location.reload(true);

  };

  const userName = JSON.parse(sessionStorage.getItem("active-user"));

  // Extract the user's first name from the JSON object
  const firstName = userName ? userName.firstName : "";

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">

<li className="nav-item">
        <Link to="" className="nav-link active" aria-current="page">
          <span className="text-success">Welcome, <strong>{firstName}</strong></span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/addcategory" class="nav-link active" aria-current="page">
          <b className="text-color abc"> Add Category</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/addproduct" class="nav-link active" aria-current="page">
          <b className="text-color abc ">Add Product</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/allorder"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color abc">All Orders</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/assigndelivery"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color abc">Assign Order Delivery</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          
          <button type="button" class="btn btn-success xyz">Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
