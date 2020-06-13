import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import styles from "./UsersList.module.css";

const UsersList = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers(userData.searchTerm);
  }, [userData.searchTerm]);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <ul className={styles["usersList"]}>
        {userData ? (
          userData.users.length > 1 ? (
            userData.users.map((user) => (
              <li className={styles["user_card"]} key={user.id}>
                <UserCard user={user} />
              </li>
            ))
          ) : (
            <UserCard user={userData.users} />
          )
        ) : (
          <li>We couldn't find any matching members.</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (val) => dispatch(fetchUsers(val)),
  };
};

UsersList.propTypes = {
  userData: PropTypes.object,
  fetchUsers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
