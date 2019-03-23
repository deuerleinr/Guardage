import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import ListingEdit from "./ListingEdit";
import "./App.css";
import "./App.css";
import Login from "./Login/Login";
import HomePage from "./HomePage";
import MenuBarLoggedOut from "./MenuBarLoggedOut";
import ListingCreate from "./ListingCreate";
import ListingList from "./ListingList";
import EmailSender from "./EmailSender";
import NotificationContainer from "./NotificationManager";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

function App(props) {
  useEffect(checkProps, []);

  function checkProps(prevProps) {
    if (prevProps !== props) {
      if (localStorage.jwtToken) {
        const user = jwt_decode(localStorage.jwtToken);
        props.setUser(user);
        console.log(user.name);
        const currentTime = Date.now() / 1000;
        if (user.exp < currentTime) {
          props.logoutUser({});
        }
      }
    }
  }

  return (
    <>
      <Route exact path="/" component={MenuBarLoggedOut} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/homepage" component={HomePage} />
      <Route path="/listingedit/:id" component={ListingEdit} />
      <Route exact path="/listingcreate" component={ListingCreate} />
      <Route exact path="/listinglist" component={ListingList} />
      <Route exact path="/emailsender" component={EmailSender} />

      <NotificationContainer />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch({ type: "SET_USER", user }),
    logoutUser: user => dispatch({ type: "LOGOUT_USER", user })
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
