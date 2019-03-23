import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import styles from "./Logout.module.css";

function Logout(props) {
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    props.logoutUser({});
    props.history.push("/");
    NotificationManager.success("Logout successful!");
  }
  return (
    <>
      <button className={styles.btn} onClick={handleLogout}>
        Logout <i className="fa fa-power-off " />
      </button>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: currentUser => dispatch({ type: "LOGOUT_USER", currentUser })
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Logout)
);
