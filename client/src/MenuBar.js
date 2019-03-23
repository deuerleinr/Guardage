import React from "react";
import styles from "./MenuBar.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./Login/Logout";
import { trimName } from "./MiscFunctions";

class MenuBar extends React.Component {
  state = {
    stuff: "",
    dropdownOpen: false
  };

  onClickData = () => {
    this.props.history.push("../listingcreate");
  };

  onClickListingList = () => {
    this.props.history.push("../listinglist");
  };

  login = () => {
    this.props.history.push("/login");
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
                <div
                  className={styles.dropdownItem}
                  onClick={this.onClickListingList}
                >
                  Listing List
                </div>
                <div className={styles.dropdownItem}>Seller List</div>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                My Properties <i className="fa fa-caret-down" />
              </button>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownItem}>Create Property</div>
                <div className={styles.dropdownItem}>Property List</div>
              </div>
            </div>
          </div>
        </div>

        <ul className={styles.menuLoginItems}>
          <li className={styles.right}>
            {this.props.user ? (
              <Logout />
            ) : (
              <button className={styles.btn} onClick={this.login}>
                Login <i className="fa fa-power-off " />
              </button>
            )}
          </li>
          <li className={styles.registerBtn}>
            <button className={styles.btn}>
              {this.props.user && (
                <span>{this.props.user && trimName(this.props.user.name)}</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps)(MenuBar));
