import React from "react";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";
import MenuBar from "../MenuBar";
import GoogleLogin from "react-google-login";

function Login(props) {
  function loginSuccess(response) {
    console.log(response);
    const user = response.profileObj;
    console.log(user);
    console.log(response.tokenId);
    NotificationManager.success("Login successful!");
    props.history.push("/homepage");
    localStorage.setItem("jwtToken", response.tokenId);
    props.setUser(user);
  }

  function loginFailure(response) {
    console.log(response);
  }

  return (
    <>
      <MenuBar />
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
          <GoogleLogin
            clientId="596113568195-prhjvoe318j6gkb4fm44r6kklt7gr58q.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={loginSuccess}
            onFailure={loginFailure}
          />
          <div>{loginFailure}</div>
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
