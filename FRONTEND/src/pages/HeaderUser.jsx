import { Link, /*useNavigate*/ } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NewApp.css"
const HeaderUser = () => {
  // let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-user");


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
        <Link to="/user/mycart" class="nav-link active" aria-current="page">
          <b className="text-color abc">My Cart</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user" class="nav-link active" aria-current="page">
          <b className="text-color abc">My Order</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >

          <button type="button" class="btn btn-success xyz">Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HeaderUser;





// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./NewApp.css";

// const HeaderUser = () => {
//   let navigate = useNavigate();

//   const userLogout = () => {
//     toast.success("Logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-user");
//     window.location.reload(true);
//   };



//   return (
//     <div className="d-flex align-items-center justify-content-between">
//       <div>
//         <h2 className="me-3">Welcome, {firstName}</h2>
//         <img src="your-logo.png" alt="GrowEasy Logo" width="50" height="50" />
//       </div>
//       <ul className="navbar-nav ms-auto"> {/* Use ms-auto class to push this ul to the right */}
//         <li className="nav-item">
//           <Link to="/user/mycart" className="nav-link active" aria-current="page">
//             <b className="text-color abc">My Cart</b>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/user/myorder" className="nav-link active" aria-current="page">
//             <b className="text-color abc">My Order</b>
//           </Link>
//         </li>
//       </ul>
//       <Link
//         to=""
//         className="nav-link active"
//         aria-current="page"
//         onClick={userLogout}
//       >
//         <button type="button" className="btn btn-success xyz">Logout</button>
//       </Link>
//       <ToastContainer />
//     </div>
//   );
// };

// export default HeaderUser;
