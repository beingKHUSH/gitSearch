import React from "react";
import UserProfile from "../components/UserProfile";

const UserPage = (props) => {
  const user_id = props.match.params.user_id;
  return <UserProfile user_id={user_id} />;
};

export default UserPage;
