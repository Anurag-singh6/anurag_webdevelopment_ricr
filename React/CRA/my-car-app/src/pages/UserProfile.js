import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      {user.isActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
      <h2>Skills:</h2>
      <ul>
        {user.skills.map((skill, idx)=>(
            <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
