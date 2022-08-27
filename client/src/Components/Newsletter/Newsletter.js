import React from "react";
import "../../styles/Newsletter/Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <h3>
          Sign Up For The <span>Newsletter</span>
        </h3>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <input type="submit" value="Subscribe" />
        </form>
        <ul>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Newsletter;
