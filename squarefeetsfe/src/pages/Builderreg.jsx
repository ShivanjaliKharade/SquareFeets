import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";

function Builderreg() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    mobileNo: "",
    aadharNo: "",
    email: "",
    builderLicense: "",
    plotNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleForm = (e) => {
    console.log(e);
    console.log(user);
    postFormData(user);
    e.preventDefault();
  };

  const postFormData = (data) => {
    axios.post("http://localhost:8083/api/auth/signup/builder", data).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="form-left">
          <h2 className="text-uppercase">Welcome..!!</h2>
          <p>
            <h2>We are SquareFeets.!</h2>
          </p>
          <p className="text">
            <h3>
              Register here and List Your Properties to get Buyers with ease
            </h3>
          </p>
          <div className="form-field">
            <input
              type="submit"
              className="account"
              onClick={() => navigate("/Login")}
              value="Have an Account?"
            />
          </div>
          <div className="form-field">
            <input
              type="button"
              className="account"
              onClick={() => navigate("/Register-customer")}
              value="Customer Registration"
            />
          </div>
        </div>
        <form className="form-right" onSubmit={handleForm}>
          <h2 className="text-uppercase">Registration form</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Your Name</label>
              <input
                type="text"
                className="input-field"
                required
                name="username"
                id="username"
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Mobile No.</label>
              <input
                type="number"
                className="input-field"
                name="mobileNo"
                id="mobileNo"
                onChange={(e) => {
                  setUser({ ...user, mobileNo: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Your Email</label>
            <input
              type="email"
              className="input-field"
              name="email"
              required
              id="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>

          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Aadhar No.</label>
              <input
                type="number"
                className="input-field"
                name="aadharNo"
                id="aadharNo"
                onChange={(e) => {
                  setUser({ ...user, aadharNo: e.target.value });
                }}
                required
              />
            </div>

            <div className="col-sm-6 mb-3">
              <label>License No.</label>
              <input
                type="number"
                className="input-field"
                name="builderLicense"
                id="builderLicense"
                onChange={(e) => {
                  setUser({ ...user, builderLicense: e.target.value });
                }}
                required
              />
            </div>
          </div>

          <div className="row">
            <label>Address</label>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Plot No."
                className="input-field"
                name="plotNo"
                id="plotNo"
                onChange={(e) => {
                  setUser({ ...user, plotNo: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Street"
                className="input-field"
                name="street"
                id="street"
                onChange={(e) => {
                  setUser({ ...user, street: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Landmark"
                className="input-field"
                name="landmark"
                id="landmark"
                onChange={(e) => {
                  setUser({ ...user, landmark: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="City"
                className="input-field"
                name="city"
                id="city"
                onChange={(e) => {
                  setUser({ ...user, city: e.target.value });
                }}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="dropdown"
                placeholder="State"
                className="input-field"
                name="state"
                id="state"
                onChange={(e) => {
                  setUser({ ...user, state: e.target.value });
                }}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="number"
                placeholder="Pin"
                className="input-field"
                name="pincode"
                id="pincode"
                onChange={(e) => {
                  setUser({ ...user, pincode: e.target.value });
                }}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                className="input-field"
                required
              />
            </div>
            {/* <div className="col-sm-6 mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="cpwd"
                id="cpwd"
                className="input-field"
                required
              />
            </div> */}
          </div>

          <div className="mb-3">
            <label className="option">
              I agree to the <a href="#">Terms and Conditions</a>
              <input type="checkbox" checked />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="form-field">
            <input
              type="submit"
              value="Register"
              className="register"
              name="register"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Builderreg;
