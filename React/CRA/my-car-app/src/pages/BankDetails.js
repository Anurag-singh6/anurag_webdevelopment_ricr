import React from "react";

const BankDetails = ({ userbank }) => {
  return (
    <div>
      <h2>Account Holder: {userbank.name}</h2>
      {userbank.isActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
      <h2>Nominee</h2>
      <ul>
        {userbank.NOM.map((nom, idx) => (
          <li key={idx}>{nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default BankDetails;
