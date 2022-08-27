import React from "react";
import "../../styles/Footer/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content row">
            <div className="col-lg-3 p-0 text-left footer-item">
              <h4>About Us</h4>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <span>1734 Stonecoal Road</span>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <span>+021-95-51-84</span>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <span>email@email.com</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 p-0 text-left footer-item">
              <h4>Categories</h4>
              <ul>
                <li>
                  <span>Smartphones</span>
                </li>
                <li>
                  <span>Watches</span>
                </li>
                <li>
                  <span>Headphones</span>
                </li>
                <li>
                  <span>Laptops</span>
                </li>
                <li>
                  <span>Cameras</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 p-0 text-left footer-item">
              <h4>Information</h4>
              <ul>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Contact Us</span>
                </li>
                <li>
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>Orders and Returns</span>
                </li>
                <li>
                  <span>Terms & Conditions</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 p-0 text-left footer-item">
              <h4>Service</h4>
              <ul>
                <li>
                  <span>My Account</span>
                </li>
                <li>
                  <span>View Cart</span>
                </li>
                <li>
                  <span>Wishlist</span>
                </li>
                <li>
                  <span>Track My Order</span>
                </li>
                <li>
                  <span>Help</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-cc-visa"></i>
            </li>
            <li>
              <i className="fa fa-credit-card"></i>
            </li>
            <li>
              <i className="fa fa-cc-paypal"></i>
            </li>
            <li>
              <i className="fa fa-cc-mastercard"></i>
            </li>
            <li>
              <i className="fa fa-cc-discover"></i>
            </li>
            <li>
              <i className="fa fa-cc-amex"></i>
            </li>
          </ul>
          <p>
            Copyright &copy;2022 All rights reserved | This template is made
            with <i className="fa fa-heart-o"></i> by <span>Yassin.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
