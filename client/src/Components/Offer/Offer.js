import React from "react";
import "../../styles/Offer/Offer.css";

function Offer() {
  return (
    <div className="offer">
      <div className="container">
        <div className="offer-item">
          <div className="offer-content">
            <ul>
              <li>
                <div>
                  <h4>02</h4>
                  <span>Days</span>
                </div>
              </li>
              <li>
                <div>
                  <h4>10</h4>
                  <span>Hours</span>
                </div>
              </li>
              <li>
                <div>
                  <h4>34</h4>
                  <span>Mins</span>
                </div>
              </li>
              <li>
                <div>
                  <h4>60</h4>
                  <span>Secs</span>
                </div>
              </li>
            </ul>
            <h4 className="deal mt-4">HOT DEAL THIS WEEK</h4>
            <h5 className="my-4">NEW COLLECTION UP TO 50% OFF</h5>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
