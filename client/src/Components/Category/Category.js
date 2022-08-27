import React from "react";
import data from "../../data.json";
import "../../styles/Category/Category.css";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-items">
          {data.map((item) => (
            <div className="category-item" key={item.id}>
              <img src={item.imageUrl} />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>{item.category}</h4>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
