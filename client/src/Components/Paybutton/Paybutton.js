import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../../styles/Paybutton/Paybutton.css";

function Paybutton() {
  const { cartItems } = useSelector((state) => state.cart);
  const { _id } = useSelector((state) => state.auth);
  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/api/stripe/create-checkout-session", {
        cartItems,
        userId: _id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button onClick={handleCheckout} className="pay">
        Proceed To Checkout
      </button>
    </>
  );
}

export default Paybutton;
