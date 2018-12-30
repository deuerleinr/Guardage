import React from "react";
import "./MenuBar.css";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="menu-logo">GUARDAGE</div>

        <ul className="menu-button-row">
          <li>
            <a href="wwww.google.com">Search</a>
          </li>
          <li>
            <a href="wwww.google.com"> Process </a>
          </li>
          <li>
            <a href="wwww.google.com"> Lists </a>
          </li>
          <li>
            <a href="wwww.google.com"> Settings </a>
          </li>
        </ul>

        <ul className="menu-login-items">
          <li className="right">
            <a href="wwww.google.com">
              Logout
              <i className="fa fa-power-off logoff-icon" />
            </a>
          </li>
          <li className="right">
            <a href="wwww.google.com">
              <span>John Smith</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
