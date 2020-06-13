import React from "react";
import Search from "../components/Search";
import UsersList from "../components/UsersList";

const HomePage = () => {
  return (
    <div className="py-50 px-100">
      <Search />
      <UsersList />
    </div>
  );
};

export default HomePage;
