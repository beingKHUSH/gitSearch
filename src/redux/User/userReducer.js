import * as types from "./userTypes";

const initialState = {
  searchTerm: "",
  isLoading: false,
  users: [],
  currentUser: {},
  repos: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: action.payload,
      };
    case types.FETCH_REPOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repos: action.payload,
        error: "",
      };
    case types.FETCH_REPOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        repos: [],
        error: action.payload,
      };
    case types.FETCH_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: "",
      };
    case types.FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        currentUser: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
