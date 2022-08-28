import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../redux/features/authSlice";
import "../../styles/Form/Form.css";

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { registerStatus } = useSelector((state) => state.auth);
  const { registerError } = useSelector((state) => state.auth);
  const { loginStatus } = useSelector((state) => state.auth);
  const { loginError } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    location.pathname === "/register"
      ? {
          username: "",
          email: "",
          phone: "",
          password: "",
        }
      : {
          username: "",
          password: "",
        }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/register") {
      dispatch(registerUser(user));
    } else if (location.pathname === "/login") {
      dispatch(loginUser(user));
    }
  };
  useEffect(() => {
    if (location.pathname === "/register") {
      registerStatus === "Success" && navigate("/login");
    } else if (location.pathname === "/login") {
      loginStatus === "Success" && navigate("/");
    }
  }, [registerStatus, loginStatus, navigate, location.pathname]);
  return (
    <div className="form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-content">
          <h2>
            {location.pathname === "/login" ? "Login User" : "Register User"}
          </h2>
          <form>
            <input
              type="text"
              value={user.username}
              placeholder="Username..."
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            {location.pathname === "/register" && (
              <>
                <input
                  type="email"
                  value={user.email}
                  placeholder="Email..."
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Phone Number..."
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </>
            )}
            <input
              type="password"
              value={user.password}
              placeholder="Password..."
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              type="submit"
              value={location.pathname === "/register" ? "Register" : "Login"}
            />
          </form>
          {location.pathname === "/register" &&
          registerStatus === "Rejected" ? (
            <p className="alert alert-danger mt-4">{registerError}</p>
          ) : null}
          {location.pathname === "/login" && loginStatus === "Rejected" ? (
            <p className="alert alert-danger mt-4">{loginError}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Form;
