import React from "react";

function Header({ isLoggedIn }) {
  return (
    <>
      Regular Function
      <div>{isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please login</h2>}</div>
    </>
  );
}

export default Header;
