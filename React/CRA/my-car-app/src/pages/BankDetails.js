import React from "react";

const BankDetails = ({ userbank }) => {
  const handleClick = () => {
    alert("Button is Clicked...!");
  };
  return (
    <div>
      <h2>Account Holder: {userbank.name.toUpperCase()}</h2>
      {userbank.isActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
      <h2>Nominee</h2>
      <ul>
        {userbank.NOM.map((nom, idx) => (
          <li key={idx}>{nom}</li>
        ))}
      </ul>
      <div>
        <button className="btn" onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default BankDetails;
