import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  state = {
    searchString: "",
    nonList: true,
    blackList: true,
    whiteList: false,
    prevNone: true,
    prevTakeDown: true,
    prevApproved: false,
    prevNotMyProperty: false,
    prevIgnore: false,
    liveUrl: true,
    deadUrl: false
  };

  onChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSearchBtn = () => {
    const req = {
      searchString: this.state.searchString,
      pageIndex: 0,
      pageSize: 8,
      nonList: this.state.nonList,
      whiteList: this.state.whiteList,
      blackList: this.state.blackList,
      prevNone: this.state.prevNone,
      prevTakeDown: this.state.prevTakeDown,
      prevApproved: this.state.prevApproved,
      prevNotMyProperty: this.state.prevNotMyProperty,
      prevIgnore: this.state.prevIgnore,
      liveUrl: this.state.liveUrl,
      deadUrl: this.state.deadUrl
    };
    this.props.handleSearchClick(req);
  };

  render() {
    const {
      searchString,
      nonList,
      blackList,
      whiteList,
      prevNone,
      prevTakeDown,
      prevApproved,
      prevNotMyProperty,
      prevIgnore,
      liveUrl,
      deadUrl
    } = this.state;

    return (
      <>
        <div className={styles.searchbar + " " + styles.root}>
          <div className={styles.search}>
            <input
              className={styles.inputSearch}
              type="text"
              name="searchString"
              value={searchString}
              onChange={this.onChange}
            />
            <button
              className={styles.btnSearch}
              value=""
              onClick={this.handleSearchBtn}
            >
              Search
            </button>
          </div>

          <div className={styles.sellers}>
            <div className={styles.filterCategory}>Sellers:</div>
            <div>
              <input
                type="checkbox"
                name="nonList"
                checked={nonList}
                value={nonList}
                onChange={this.onChange}
              />
              Non-list
            </div>
            <div>
              <input
                type="checkbox"
                name="blackList"
                checked={blackList}
                value={blackList}
                onChange={this.onChange}
              />
              Blacklist
            </div>
            <div>
              <input
                type="checkbox"
                name="whiteList"
                checked={whiteList}
                value={whiteList}
                onChange={this.onChange}
              />
              Whitelist
            </div>
          </div>

          <div className={styles.priors1}>
            <div className={styles.filterCategory}>Previous action on URL:</div>
            <div>
              <input
                type="checkbox"
                name="prevNone"
                checked={prevNone}
                value={prevNone}
                onChange={this.onChange}
              />
              None
            </div>
            <div>
              <input
                type="checkbox"
                name="prevTakeDown"
                checked={prevTakeDown}
                value={prevTakeDown}
                onChange={this.onChange}
              />
              Take-Down actions
            </div>
            <div>
              <input
                type="checkbox"
                name="prevApproved"
                checked={prevApproved}
                value={prevApproved}
                onChange={this.onChange}
              />
              marked "approved use"
            </div>
          </div>

          <div className={styles.priors2}>
            <div>{"\u00A0"}</div>
            <div>
              <input
                type="checkbox"
                name="prevNotMyProperty"
                checked={prevNotMyProperty}
                value={prevNotMyProperty}
                onChange={this.onChange}
              />
              marked "not my property"
            </div>
            <div>
              <input
                type="checkbox"
                name="prevIgnore"
                checked={prevIgnore}
                value={prevIgnore}
                onChange={this.onChange}
              />
              marked "ignore"
            </div>
          </div>

          <div className={styles.deadlive}>
            <div className={styles.filterCategory}>Live/Dead URL</div>
            <div>
              <input
                type="checkbox"
                name="liveUrl"
                checked={liveUrl}
                value={liveUrl}
                onChange={this.onChange}
              />
              Live
            </div>

            <div>
              <input
                type="checkbox"
                name="deadUrl"
                checked={deadUrl}
                value={deadUrl}
                onChange={this.onChange}
              />
              Dead
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
