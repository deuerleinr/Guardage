import React from "react";
import { Route } from "react-router-dom";
import ListingEdit from "./ListingEdit";
import "./App.css";
import "./App.css";
import Login from "./Login";
import HomePage from "./HomePage";
import MenuBarLoggedOut from "./MenuBarLoggedOut";
import ListingCreate from "./ListingCreate";
import EmailSender from "./EmailSender";
import NotificationContainer from "./NotificationManager";

class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={MenuBarLoggedOut} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
        <Route path="/listingedit/:id" component={ListingEdit} />
        <Route exact path="/listingcreate" component={ListingCreate} />
        <Route exact path="/emailsender" component={EmailSender} />

        <NotificationContainer />
      </>
    );
  }
}

export default App;
