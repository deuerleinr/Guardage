import React from "react";
import styles from "./MenuBar.module.css";
import { withRouter } from "react-router-dom";

class MenuBar extends React.Component {
  state = {
    stuff: "",
    dropdownOpen: false
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

  // toggle = () => {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // };

  render() {
    return (
      <div className={[styles.rootMenu, styles.menuBar].join(" ")}>
        <div className={styles.menuLogo}>
          <button className={styles.btnGuardage} onClick={this.onClickGuardage}>
            GUARDAGE
          </button>
        </div>
        <div className={styles.navbar}>
          <div className={styles.menuButtonRow}>
            <button className={styles.btnLink}>Search</button>
            <button className={styles.btnLink}>Resources</button>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                Data <i className="fa fa-caret-down" />
              </button>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownItem} onClick={this.onClickData}>
                  Create Listing
                </div>
                <div className={styles.dropdownItem} onClick={this.onClickData}>
                  Create Seller
                </div>
                <div className={styles.dropdownItem}>Seller List</div>
              </div>
            </div>
          </div>
        </div>

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
