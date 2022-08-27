import React from "react";
import Category from "../Components/Category/Category";
import Newsletter from "../Components/Newsletter/Newsletter";
import Offer from "../Components/Offer/Offer";
import Products from "../Components/Products/Products";
import Sellings from "../Components/Sellings/Sellings";

function Home() {
  return (
    <>
      <Category />
      <Products />
      <Offer />
      <Sellings />
      <Newsletter />
    </>
  );
}

export default Home;
