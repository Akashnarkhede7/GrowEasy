import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddUserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      console.log("******near toast thing");
      toast.success("Registered Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.warn("result", result);
      result
        .json()
        .then((res) => {
          console.log("response", res);
        })
        .catch((error) => {
          console.log("******", error);
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-success custom-bg-text text-center">
            <h5 class="card-title"> Register User</h5>
          </div>
          <div class="card-body">
            <form class="row g-3" onSubmit={saveUser}>
              <div class="col-md-6 mb-3 text-color">
                <label for="role" class="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  {/* <option value="Admin"> Admin </option> */}
                  <option value="Customer"> Customer </option>
                  <option value="Delivery"> Delivery Person </option>
                </select>
              </div>

              <div class="mb-3 col-md-6 text-color">
                <label for="title" class="form-label">
                  <b> First Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                  required
                  placeholder="e.g Manoj"
                />
              </div>
              <div class="mb-3 col-md-6 text-color">
                <label for="description" class="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                  required
                  placeholder="e.g Nerkar"
                />
              </div>

              <div className="mb-3 col-md-6 text-color">
                <b>
                  <label className="form-label">Email Id</label>
                </b>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                  required
                  placeholder="e.g manoj@gmail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                />
                
              </div>

              <div class="mb-3 col-md-6 mt-1">
                <label for="quantity" class="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                  required
                  placeholder="e.g manoj@123"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">
                  <b>Mobile No</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleUserInput}
                  value={user.phoneNo}
                  required
                  placeholder="e.g 7777777777"
                  minLength="10"
                  maxLength="10"
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="description" class="form-label">
                  <b> Street</b>
                </label>
                <textarea
                  class="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                  required
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                  required
                  placeholder="e.g Jaipur"
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="pincode" class="form-label">
                  <b>Pincode</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                  required
                  placeholder="e.g 424306"
                />
              </div>

              <input
                type="submit"
                class="btn bg-success custom-bg-text"
                value="Register User"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;



