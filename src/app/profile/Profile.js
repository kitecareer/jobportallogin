import React from "react";
import basestyle from "./Base.module.css";
import { useLocation } from "react-router-dom";

const Profile = ({ setUserState }) => {
  const location = useLocation();
  console.log("Location search:", location.search);
  const queryParams = new URLSearchParams(location.search);
  const userParam = queryParams.get("user");
  console.log("User param:", userParam);
  const userData = userParam ? JSON.parse(userParam) : null;

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { user_info } = userData; // Access the user_info object

  const handleLogout = () => {
    setUserState({}); // Clear user state
  };

  console.log("User fname:", user_info.fname); // Log the fname property

  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {user_info.fname} !!</h1>
      <div>
        <h2 style={{ color: "orange" }}>UserID : {user_info.email} </h2>
      </div>
      <button className={basestyle.button_common} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
