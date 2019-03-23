import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";

function Login(props) {
  useEffect(
    () =>
      (window.onSignIn = googleUser => {
        const profile = googleUser.getBasicProfile();
        const user = {};
        user.id = profile.getId();
        user.name = profile.getName();
        user.image = profile.getImageUrl();
        user.email = profile.getEmail();
        user.id_token = googleUser.getAuthResponse().id_token;
        localStorage.setItem("jwtToken", user.id_token);
        props.setUser(user);
        NotificationManager.success("Login successful!");
        // props.history.push("/homepage");
      }),
    []
  );

  return (
    <>
      <div className="py-4">
        <div
          style={{
            marginTop: "40vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3>Please sign in</h3>
          <form className="formInput">
            <div className="g-signin2" data-onsuccess="onSignIn" />
          </form>
        </div>
      </div>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch({ type: "SET_USER", user })
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
