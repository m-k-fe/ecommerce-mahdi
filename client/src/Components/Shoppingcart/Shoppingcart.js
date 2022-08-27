import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseQty } from "../../redux/features/cartSlice";
import "../../styles/Shoppingcart/Shoppingcart.css";
import Paybutton from "../Paybutton/Paybutton";

function Shoppingcard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { _id } = useSelector((state) => state.auth);

  const handleIncreaseQty = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseQty = (item) => {
    dispatch(decreaseQty(item));
  };
  return (
    <section className="shopping-card">
      <div className="container">
        <div className="shopping-card-container">
          <div className="cart">
            <div className="shopping-header text-left">
              <h5>Product</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div>
            <div className="shopping-content">
              {cartItems.map((item) => (
                <div key={item._id} className="shopping-item">
                  <div className="shopping-item-image">
                    <img src={item.image} />
                    <span>{item.name}</span>
                  </div>
                  <div className="shopping-item-price">
                    <span>${item.newprice}</span>
                  </div>
                  <div className="shopping-item-qty">
                    <button onClick={() => handleDecreaseQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleIncreaseQty(item)}>+</button>
                  </div>
                  <div className="shopping-item-total">
                    <span>${+item.newprice * item.qty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-total">
            <h4>Cart Totals</h4>
            <div className="subtotal">
              <p>Subtotal:</p>
              <p>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * +item.newprice,
                  0
                )}
              </p>
            </div>
            <div className="shipping">
              <p>Shipping:</p>
              <div>
                <p>
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <select>
                  <option hidden>Select A Country</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <input type="text" placeholder="State / Country" />
                <input type="text" placeholder="Postcode / Zip" />
                <button>Update Totals</button>
              </div>
            </div>
            <div className="total">
              <div>
                <p>Total:</p>
                <p>
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.qty * +item.newprice,
                    0
                  )}
                </p>
              </div>
              {_id ? (
                <Paybutton />
              ) : (
                <button onClick={() => navigate("/login")}>
                  Login To Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shoppingcard;
