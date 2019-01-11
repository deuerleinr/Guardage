import React from "react";
import styles from "./MenuBar.module.css";

class MenuBarLoggedOut extends React.Component {
  onLoggedIn = () => {
    this.props.history.push("./homepage");
  };

  render() {
    return (
      <>
        <div className={[styles.rootMenu, styles.menuBar].join(" ")}>
          <div className={styles.menuLogo}>
            <button
              className={styles.btnGuardage}
              onClick={this.onClickGuardage}
            >
              GUARDAGE
            </button>
          </div>

          <ul className={styles.menuButtonRow}>
            <li>
              <button className={styles.btn}>Services</button>
            </li>
            <li>
              <button className={styles.btn}>Your rights</button>
            </li>
            <li>
              <button className={styles.btn}>Pricing</button>
            </li>
          </ul>

          <ul className={styles.menuLoginItems}>
            <li className={styles.right}>
              <button className={styles.btn} onClick={this.onLoggedIn}>
                <span>
                  Login
                  <i className="fas fa-user" />
                </span>
              </button>
            </li>
            <li className={styles.right}>
              <button className={styles.btn}>
                <span>Register</span>
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.jumbotron}>Protect what's yours.</div>
      </>
    );
  }
}

export default MenuBarLoggedOut;
