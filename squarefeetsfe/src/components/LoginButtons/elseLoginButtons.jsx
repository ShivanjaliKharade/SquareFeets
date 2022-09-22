import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CustomerProfileButton() {
  return (
    <div>
      <Link to="/Customer-Profile" className="active">
        Profile
      </Link>
    </div>
  );
}

function BuilderProfileButton() {
  return (
    <div>
      <Link to="/Builder-Profile" className="active">
        Profile
      </Link>
    </div>
  );
}

export default function ElseLoginButton() {
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
    }
  }, []);

  const navigate = useNavigate();

  if (login.role == "ROLE_CUSTOMER") {
    return (
      <div>
        <ul className="menu">
          <li>
            <CustomerProfileButton />
          </li>
          <li>
            <Link
              to="/Login"
              className="active"
              onClick={() => {
                localStorage.clear();
                axios.post("http://localhost:8083/api/auth/signout").then(
                  (res) => {
                    if (res.status === 200) {
                      navigate("/");
                    }
                    console.log(res);
                  },
                  (err) => {
                    console.log("Error" + err);
                  }
                );
              }}
            >
              Signout
            </Link>
          </li>
        </ul>
      </div>
    );
  } else if (login.role == "ROLE_BUILDER") {
    return (
      <div>
        <ul className="menu">
          <li>
            <BuilderProfileButton />
          </li>
          <li>
            <Link
              to="/Login"
              className="active"
              onClick={() => {
                localStorage.clear();
                axios.post("http://localhost:8083/api/auth/signout").then(
                  (res) => {
                    if (res.status === 200) {
                      navigate("/");
                    }
                    console.log(res);
                  },
                  (err) => {
                    console.log("Error" + err);
                  }
                );
              }}
            >
              Signout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

// <div>
//   <ul className="menu">
//     <li>
//       {login.role === "ROLE_CUSTOMER" ? (
//         <CustomerProfileButton />
//       ) : (
//         <BuilderProfileButton />
//       )}
//     </li>
//     <li>
//       <Link
//         to="/Login"
//         className="active"
//         onClick={() => {
//           localStorage.clear();
//           axios.post("http://localhost:8083/api/auth/signout").then(
//             (res) => {
//               if (res.status === 200) {
//                 navigate("/");
//               }
//               console.log(res);
//             },
//             (err) => {
//               console.log("Error" + err);
//             }
//           );
//         }}
//       >
//         Signout
//       </Link>
//     </li>
//   </ul>
// </div>;
