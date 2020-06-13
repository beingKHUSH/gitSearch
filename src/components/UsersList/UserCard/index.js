import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <div className={styles["user_card_container"]}>
      <Link to={"/" + user.login}>
        <img
          className={styles["avatar"]}
          src={user.avatar_url}
          alt="avatar"
          width="48px"
          height="48px"
        />
      </Link>
      <Link to={"/" + user.login}>
        <span className={styles["card_name"]}>{user.login}</span>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
