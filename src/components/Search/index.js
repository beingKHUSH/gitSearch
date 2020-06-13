import React from "react";
import styles from "./Search.module.css";
import { connect } from "react-redux";
import { setSearchTerm } from "../../redux";
import PropTypes from "prop-types";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={styles["search_container"]}>
          <input
            type="text"
            className={styles["search_input"]}
            placeholder="Find a member"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className={styles["search_svg"]}
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
            ></path>
          </svg>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.user.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (val) => dispatch(setSearchTerm(val)),
  };
};

Search.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
