import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, logOutUser } from "../../redux/features/authSlice";
import "../../styles/Upperbar/Upperbar.css";
function Upperbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.auth);
  const { username } = useSelector((state) => state.auth);
  const { loginStatus } = useSelector((state) => state.auth);
  console.log(loginStatus);
  const handleLogOutUser = () => {
    dispatch(logOutUser());
    navigate("/register");
  };
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="upperbar">
      <div className="container">
        <div className="upperbar-content row">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="fa fa-phone"></i>
                <span>+021-95-51-84</span>
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                <span>email@email.com</span>
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                <span>1734 Stonecoal Road</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="justify-content-end">
              {_id && loginStatus === "Success" ? (
                <>
                  <li>
                    <NavLink to="/profile">
                      <span>{username}</span>
                    </NavLink>
                  </li>
                  <li onClick={handleLogOutUser}>
                    <a>
                      <span>Logout</span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">
                      <i className="fa fa-sign-in"></i> <span>Login</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">
                      <i className="fa fa-user-plus"></i> <span>Register</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upperbar;
