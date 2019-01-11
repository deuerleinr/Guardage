import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className={styles.searchbar + " " + styles.root}>
          <div className={styles.search}>
            <input className={styles.inputSearch} type="text" name="search" />
            <button className={styles.btnSearch}>Search</button>
          </div>

          <div className={styles.sellers}>
            <div className={styles.filterCategory}>Sellers:</div>
            <div>
              <input type="checkbox" name="non-list" value="1" />
              Non-list
            </div>{" "}
            <div>
              <input type="checkbox" name="blacklist" value="1" />
              Blacklist
            </div>
            <div>
              <input type="checkbox" name="whitelist" value="1" />
              Whitelist
            </div>
          </div>

          <div className={styles.priors1}>
            <div className={styles.filterCategory}>
              Previous action on URL:{" "}
            </div>
            <div>
              <input type="checkbox" name="unmarked" value="1" />
              None
            </div>
            <div>
              <input type="checkbox" name="priorTakeDown" value="1" />
              Take-Down actions
            </div>
            <div>
              <input type="checkbox" name="approved" value="1" />
              marked "approved use"
            </div>
          </div>

          <div className={styles.priors2}>
            <div>{"\u00A0"}</div>
            <div>
              <input type="checkbox" name="notMyProperty" value="1" />
              marked "not my property"
            </div>
            <div>
              <input type="checkbox" name="ignore" value="1" />
              marked "ignore"
            </div>
          </div>

          <div className={styles.deadlive}>
            <div className={styles.filterCategory}>Live/Dead URL.</div>
            <div>
              <input type="checkbox" name="liveUrl" value="1" />
              Live
            </div>

            <div>
              <input type="checkbox" name="deadUrl" value="1" />
              Dead
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
