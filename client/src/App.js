import React from "react";
import { Route } from "react-router-dom";
import ListingEdit from "./ListingEdit";
import "./App.css";
import "./App.css";
import Login from "./Login";
import HomePage from "./HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/login" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
        <Route path="/listingedit/:id" component={ListingEdit} />
      </>
    );
  }
}

export default App;
