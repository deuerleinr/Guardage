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

          <div className={styles.navbar}>
            <div className={styles.menuButtonRow}>
              <button className={styles.btnLink}>Services</button>
              <button className={styles.btnLink}>Your Rights</button>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  Pricing <i className="fa fa-caret-down" />
                </button>
                <div className={styles.dropdownContent}>
                  <div
                    className={styles.dropdownItem}
                    // onClick={this.onClickData}
                  >
                    Free Services
                  </div>
                  <div
                    className={styles.dropdownItem}
                    // onClick={this.onClickData}
                  >
                    Subscription Services
                  </div>
                  <div className={styles.dropdownItem}>Legal Services</div>
                </div>
              </div>
            </div>
          </div>
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
