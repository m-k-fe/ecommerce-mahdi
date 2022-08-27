import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSellingsProductsByCategory,
  getSellingProducts,
} from "../../redux/features/productsSlice";
import "../../styles/Sellings/Sellings.css";

function Sellings() {
  const dispatch = useDispatch();
  const { sellingProducts } = useSelector((state) => state.products);
  const handleClassNameActive = (e) => {
    const listItems = Array.from(e.target.parentElement.children);
    listItems.forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
    });
  };
  const handleFilterSellingsProducts = (e, category) => {
    handleClassNameActive(e);
    dispatch(filterSellingsProductsByCategory(category));
  };
  useEffect(() => {
    dispatch(getSellingProducts());
  }, [dispatch]);
  return (
    <div className="sellings">
      <div className="container">
        <div className="products-settings text-left">
          <h3>Top Selling</h3>
          <ul>
            <li
              className="active"
              onClick={(e) => handleFilterSellingsProducts(e, "all")}
            >
              All
            </li>
            <li onClick={(e) => handleFilterSellingsProducts(e, "mobiles")}>
              Smartphones
            </li>
            <li onClick={(e) => handleFilterSellingsProducts(e, "watches")}>
              Watches
            </li>
            <li onClick={(e) => handleFilterSellingsProducts(e, "headphones")}>
              Headphones
            </li>
            <li onClick={(e) => handleFilterSellingsProducts(e, "laptops")}>
              Laptops
            </li>
            <li onClick={(e) => handleFilterSellingsProducts(e, "cameras")}>
              Cameras
            </li>
          </ul>
        </div>
        {sellingProducts.length != 0 ? (
          <div className="sellings-content mb-4">
            {sellingProducts.map((item) => (
              <div className="selling-item" key={item._id}>
                <img src={item.image} />
                <div className="details">
                  <p className="category">{item.category}</p>
                  <h6>{item.name}</h6>
                  <div className="prices text-left">
                    <h6 className="new mb-0">${item.newprice}</h6>
                    <span>${item.oldprice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-danger mt-4">There Is No Items</div>
        )}
      </div>
    </div>
  );
}

export default Sellings;
