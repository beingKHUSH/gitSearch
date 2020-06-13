import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserDetails, fetchRepos } from "../../redux";
import PropTypes from "prop-types";
import RepoCard from "./RepoCard";
import styles from "./UserProfile.module.css";

const UserProfile = (props) => {
  const { fetchUser, fetchRepos, user, repos } = props;
  useEffect(() => {
    fetchUser();
    fetchRepos();
  }, []);

  return user ? (
    <div className={styles["outerContainer"]}>
      <div className={styles["leftContainer"]}>
        <div className={styles["avatar"]}>
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <div>
          <p class={styles["card-fullname"]}>{user.name}</p>
          <p class={styles["card-username"]}>{user.login}</p>
        </div>
      </div>
      <div className="rightContainer">
        <ul>
          {repos.map((repo) => (
            <li className={styles["repo_card"]} key={repo.id}>
              <RepoCard repo={repo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="center">Loading details...</div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
    repos: state.user.repos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let user_id = ownProps.user_id;
  return {
    fetchUser: () => dispatch(fetchUserDetails(user_id)),
    fetchRepos: () => dispatch(fetchRepos(user_id)),
  };
};

UserProfile.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  fetchUser: PropTypes.func,
  fetchRepos: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
