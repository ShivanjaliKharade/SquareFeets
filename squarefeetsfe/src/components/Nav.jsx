import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";
import calculator from "../images/calculator.png";
import LoginButton from "./LoginButtons/LoginButtons";
import ElseLoginButton from "./LoginButtons/elseLoginButtons";
import { useNavigate } from "react-router-dom";

const role = "CUSTOMER";

const Nav = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/Property", { state: { destination, date, options } });
  };

  const [login, setLogin] = useState({
    isLogin: false,
    role: null,
    username: null,
  });

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData != null && loginData.isLogin) {
      setLogin({
        isLogin: true,
        role: loginData.userRole,
        username: loginData.username,
      });
      console.log(loginData.userRole);
    }
  }, []);

  const navStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    zIndex: 1000,
  };
  return (
    <div style={{ ...navStyles }}>
      <nav sticky="top">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li onClick={handleSearch}>
            <Link to="/List">Property</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>

        {login.role != null ? <ElseLoginButton /> : <LoginButton />}
        <ul>
          <li>
            <Link to="/">
              <img src={calculator} alt="..." style={{ width: "40px" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
