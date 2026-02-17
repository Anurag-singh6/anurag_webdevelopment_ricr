import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkoutpage = () => {
  const navigate = useNavigate();

  const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart"))); //get cart details stored in local
  console.log("cartcheck ", cart);
  return (
    <>
    <div>checkout</div>
    </>
  );
};

export default Checkoutpage;
