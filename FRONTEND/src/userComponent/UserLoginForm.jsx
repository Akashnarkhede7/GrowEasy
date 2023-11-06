// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import SignImage from "../images/signIn.png"
// const UserLoginForm = () => {
//   let navigate = useNavigate();
//   const [loginRequest, setLoginRequest] = useState({
//     emailId: "",
//     password: "",
//     role: "",
//   });

//   const handleUserInput = (e) => {
//     setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
//   };

//   const loginAction = (e) => {
//     fetch("http://localhost:8080/api/user/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginRequest),
//     }).then((result) => {
      
//       console.log("result", result);
//       result.json().then((res) => {
        
//         if (res.role === "Admin") {
//           console.log("Working fine:)");
//           sessionStorage.setItem("active-admin", JSON.stringify(res));
//         } else if (res.role === "Customer") {
//           sessionStorage.setItem("active-user", JSON.stringify(res));
//         } else if (res.role === "Delivery") {
//           sessionStorage.setItem("active-delivery", JSON.stringify(res));
//         }


      

//         toast.success("logged in successfully!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         navigate("/home");
//         window.location.reload(true);
//       });
//     }).catch(error=>{
//           toast.success("Invalid login request")
//           alert("Invalid")
//     });
//     e.preventDefault();
//   };

  

//   return (
//     <div>
      
//       <div className=" d-flex aligns-items-center justify-content-center  mt-5 mb-5 ">
//       <div className="col-4 card form-card p-0  ">
//           <img src={SignImage} height="100%" alt="" /> 
//       </div>
//         <div
//           className="card form-card  custom-bg  col-4"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-success text-center custom-bg-text m-0 ">
//             <h4 className="card-title"> Sign in</h4>
//           </div>
//           <div className="card-body">
//             <form>
//               <div class="mb-3 text-color">
//                 <label for="role" class="form-label">
//                   <b>User Role</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="role"
//                 >
//                   <option value="0">Select Role</option>
//                   <option value="Admin"> Admin </option>
//                   <option value="Customer"> Customer </option>
//                   <option value="Delivery"> Delivery Person </option>
//                 </select>
//               </div>

//               <div className="mb-3 text-color">
//                 <label for="emailId" class="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={loginRequest.emailId}
//                   required
//                   placeholder="e.g cdac@gmail.com"
//                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label for="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={loginRequest.password}
//                   autoComplete="on"
//                   required
//                   placeholder="e.g Manoj@123"
//                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-color custom-bg-text border border-dark"
//                 onClick={loginAction}
//               >
//                 Login
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLoginForm;


import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import SignImage from "../images/signIn.png";


const UserLoginForm = () => {
  let navigate = useNavigate();
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          if (res.role === "Admin") {
            console.log("Working fine:)");
            sessionStorage.setItem("active-admin", JSON.stringify(res));
            sessionStorage.setItem("isAdminLoggedIn", true); 
          } else if (res.role === "Customer") {
            sessionStorage.setItem("active-user", JSON.stringify(res));
          } else if (res.role === "Delivery") {
            sessionStorage.setItem("active-delivery", JSON.stringify(res));
            // sessionStorage.setItem("isDeliveryLoggedIn",true); 
          }

          toast.success("logged in successfully!!!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

         


          navigate("/home");
          window.location.reload(true);
        });
        toast.error("Invalid login request");
      })
      .catch((error) => {
        toast.success("Invalid login request");
        alert("Invalid");

        // toast.error("Login failed. Please check your credentials.", {
        //   position: "top-center",
        //   autoClose: 4000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="d-flex aligns-items-center justify-content-center  mt-5 mb-5 ">
        <div className="col-4 card form-card p-0  ">
          <img src={SignImage} height="100%" alt="" />
        </div>
        <div
          className="card form-card  custom-bg  col-4"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-success text-center custom-bg-text m-0 ">
            <h4 className="card-title"> Sign in</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label for="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Admin"> Admin </option>
                  <option value="Customer"> Customer </option>
                  <option value="Delivery"> Delivery Person </option>
                </select>
              </div>

              <div className="mb-3 text-color">
                <label for="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                  required
                  placeholder="e.g cdac@gmail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                  required
                  placeholder="e.g Manoj@123"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text border border-dark"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
