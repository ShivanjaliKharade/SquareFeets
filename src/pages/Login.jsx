import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import pic from "../images/Login.jpg";
import "../styles/test.css";

function Login() {
  const [user, setUser] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [login, setLogin] = useState({
    isLogin: false,
    accessToken: null,
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    //console.log(e);
    postFormData(user);
    console.log(user.usernameOrEmail);
    console.log(user.password);
    e.preventDefault();
  };

  const postFormData = (data) => {
    axios.post("http://localhost:8083/api/auth/signin", data).then(
      (res) => {
        if (res.status === 200) {
          navigate("/");
          localStorage.setItem(
            "loginData",
            JSON.stringify({
              isLogin: true,
              accessToken: res.data.accessToken,
              username: res.data.username,
              userRole: res.data.userRole,
            })
          );
          setLogin({
            isLogin: true,
          });
          console.log(res.data.username);
        }
      },
      (err) => {
        console.log("Error" + err);
      }
    );
  };

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));

    setLogin({ accessToken: loginData });
    if (loginData != null && loginData.isLogin) {
      setLogin({ isLogin: true });
    }
  }, []);

  return (
    <div style={{ padding: 0 }}>
      <Nav />
      <div className="container mt-5 mb-5">
        <div className="d-flex flex row g-0">
          <div className="col-md-6 mt-3">
            <div className="card1 p-3">
              <div className="d-flex flex-column">
                <img
                  src="https://i.imgur.com/kFFNY1q.png"
                  height="50"
                  width="50"
                  alt="..."
                />
                <span className="login mt-3">Log in</span>
              </div>

              <div className="input-field d-flex flex-column mt-3">
                <form onSubmit={handleForm}>
                  <span>Email</span>{" "}
                  <input
                    className="form-control"
                    placeholder="email@example.com"
                    name="usernameOrEmail"
                    id="usernameOrEmail"
                    onChange={(e) => {
                      setUser({ ...user, usernameOrEmail: e.target.value });
                    }}
                  />
                  <span className="mt-3">Password</span>{" "}
                  <input
                    className="form-control"
                    placeholder="Enter Your Password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                  <button
                    type="submit"
                    className="mt-4 btn btn-warning d-flex justify-content-center align-items-center"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-3 text1">
                  <span className="mt-3 forget">Forget Password?</span>
                </div>
                <div className="text2 mt-4 d-flex flex-row align-items-center">
                  <span>
                    Don't have an account?
                    <span className="register">
                      <Link to="/Register-customer">Register here</Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <div className="card2 p-3">
              <div className="image">
                <img
                  src={pic}
                  alt=""
                  style={{ width: "530px", height: "370px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
