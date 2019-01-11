import React from "react";
import styles from "./MenuBar.module.css";
import { withRouter } from "react-router-dom";

class MenuBar extends React.Component {
  state = {
    stuff: ""
  };

  onClickData = () => {
    this.props.history.push("../listingcreate");
  };

  logout = () => {
    this.props.history.push("/");
  };

  onClickGuardage = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className={[styles.rootMenu, styles.menuBar].join(" ")}>
        <div className={styles.menuLogo}>
          <button className={styles.btnGuardage} onClick={this.onClickGuardage}>
            GUARDAGE
          </button>
        </div>

        <ul className={styles.menuButtonRow}>
          <li>
            <button className={styles.btn}>Search</button>
          </li>
          <li>
            <button className={styles.btn}>Lists</button>
          </li>
          <li>
            <button className={styles.btn} onClick={this.onClickData}>
              Data
            </button>
          </li>
        </ul>
        <ul className={styles.menuLoginItems}>
          <li className={styles.right}>
            <button className={styles.btn} onClick={this.logout}>
              Logout <i className="fa fa-power-off " />
            </button>
          </li>
          <li className={styles.registerBtn}>
            <button className={styles.btn}>
              <span>John Smith</span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MenuBar);
