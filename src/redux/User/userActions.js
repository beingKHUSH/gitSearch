import axios from "axios";

import * as types from "./userTypes";

export const setSearchTerm = (val) => {
  return {
    type: types.SET_SEARCH_TERM,
    payload: val,
  };
};

export const fetchUsers = (user_id = "") => {
  return (dispatch) => {
    let url = "https://api.github.com/users";
    if (user_id.length) {
      url = "https://api.github.com/search/users?q=" + user_id;
    }
    dispatch(fetchUsersRequest());
    axios
      .get(url)
      .then((response) => {
        //response.data is the users
        const users = response.data;
        if (!users.items) {
          dispatch(fetchUsersSuccess(users));
        } else {
          dispatch(fetchUsersSuccess(users.items));
        }
      })
      .catch((error) => {
        //error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUserDetails = (loginId) => {
  return (dispatch) => {
    dispatch(fetchUserDetailsRequest());
    axios
      .get("https://api.github.com/users/" + loginId)
      .then((response) => {
        //response.data is the users
        const user = response.data;
        dispatch(fetchUserDetailsSuccess(user));
      })
      .catch((error) => {
        //error.message is the error message
        dispatch(fetchUserDetailsFailure(error.message));
      });
  };
};

export const fetchRepos = (loginId) => {
  return (dispatch) => {
    dispatch(fetchReposRequest());
    axios
      .get(
        "https://api.github.com/users/" + loginId + "/repos?sort=created:dsc"
      )
      .then((response) => {
        //response.data is the users
        const repos = response.data;
        dispatch(fetchReposSuccess(repos));
      })
      .catch((error) => {
        //error.message is the error message
        dispatch(fetchReposFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUserDetailsRequest = () => {
  return {
    type: types.FETCH_USER_DETAILS_REQUEST,
  };
};

export const fetchUserDetailsSuccess = (user) => {
  return {
    type: types.FETCH_USER_DETAILS_SUCCESS,
    payload: user,
  };
};

export const fetchUserDetailsFailure = (error) => {
  return {
    type: types.FETCH_USER_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchReposRequest = () => {
  return {
    type: types.FETCH_REPOS_REQUEST,
  };
};

export const fetchReposSuccess = (repos) => {
  return {
    type: types.FETCH_REPOS_SUCCESS,
    payload: repos,
  };
};

export const fetchReposFailure = (error) => {
  return {
    type: types.FETCH_REPOS_FAILURE,
    payload: error,
  };
};
