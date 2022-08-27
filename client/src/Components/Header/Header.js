import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/features/cartSlice";
import { removeFromFavorite } from "../../redux/features/favoriteSlice";
import "../../styles/Header/Header.css";
import Upperbar from "../Upperbar/Upperbar";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriteItems } = useSelector((state) => state.favorite);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleRemoveFromFavorite = (item) => {
    dispatch(removeFromFavorite(item));
  };
  const handleClassName = (e, array) => {
    array.length > 0 &&
      e.target.parentElement.children[2].classList.toggle("toggle");
  };
  const navigateToCart = () => {
    navigate("/features");
  };
  return (
    <>
      <Upperbar />
      <nav className="navbar navbar-expand-lg navbar-light" id="header">
        <div className="container">
          <NavLink className="brand navbar-brand mr-4" to="/">
            <h2 className="mb-0">
              Electro <span>.</span>
            </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-header">
              <select>
                <option hidden>Categories</option>
                <option value="mobiles">Smartphones</option>
                <option value="watches">Watches</option>
                <option value="headphones">Headphones</option>
              </select>
              <input type="email" placeholder="Search here" />
              <input type="submit" value="Search" />
            </form>
            <div className="my-2 my-lg-0 ml-lg-auto icones">
              <ul>
                <li>
                  <i
                    className="fa fa-heart-o"
                    onClick={(e) => handleClassName(e, favoriteItems)}
                  ></i>
                  <span>{favoriteItems.length}</span>
                  <div className="dropdown-cart-items favorite">
                    {favoriteItems.map((item) => (
                      <div key={item._id} className="dropdown-cart-item">
                        <span
                          className="drop-close"
                          onClick={() => handleRemoveFromFavorite(item)}
                        >
                          &times;
                        </span>
                        <div>
                          <img src={item.image} />
                          <div>
                            <h6>{item.name}</h6>
                            <span className="price-new">${item.newprice}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <i
                    className="fa fa-shopping-cart"
                    onClick={(e) => handleClassName(e, cartItems)}
                  ></i>
                  <span>{cartItems.length}</span>
                  <div className="dropdown-cart-items">
                    {cartItems.map((item) => (
                      <div key={item._id} className="dropdown-cart-item">
                        <span
                          className="drop-close"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          &times;
                        </span>
                        <div>
                          <img src={item.image} />
                          <div>
                            <h6>{item.name}</h6>
                            <span className="drop-qty">{item.qty}x</span>
                            <span className="price-new">${item.newprice}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="drop-view-checkout">
                      <button className="drop-view" onClick={navigateToCart}>
                        View Cart
                      </button>
                      <button
                        className="drop-checkout"
                        onClick={navigateToCart}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        id="links"
      >
        <div className="container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
