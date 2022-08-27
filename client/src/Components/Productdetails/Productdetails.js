import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import "../../styles/Productdetails/Productdetails.css";
import Newsletter from "../Newsletter/Newsletter";

function Productdetails() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <>
      <div className="details">
        <div className="container">
          {
            <div className="row">
              <div className="details-image col-lg-4">
                <img src={product.image} />
              </div>
              <div className="details-info col-lg-8 text-left">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="newprice">${product.newprice}</span>
                {product.oldprice && (
                  <span className="oldprice">${product.oldprice}</span>
                )}
                <div className="add-div-details">
                  <button
                    className="btn-details"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Productdetails;
