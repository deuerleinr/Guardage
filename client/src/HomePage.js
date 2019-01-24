import React from "react";
import { listing_Search_async } from "./server";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";
import styles from "./HomePage.module.css";
import Paginator from "./Paginator";

class HomePage extends React.Component {
  state = {
    listings: [],
    totalCount: 0,
    totalPages: 0,
    searchString: "",
    pageIndex: 0,
    pageSize: 8,
    nonList: true,
    whiteList: false,
    blackList: true,
    prevNone: true,
    prevTakeDown: true,
    prevApproved: false,
    prevNotMyProperty: false,
    prevIgnore: false,
    liveUrl: true,
    deadUrl: false
  };

  async componentDidMount() {
    const req = {
      searchString: "",
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
    const response = await listing_Search_async(req);
    const totalCount = response.totalCount;
    const totalPages = Math.floor(totalCount / 8 + 1);
    this.setState({
      listings: response.pagedItems,
      totalCount: totalCount,
      totalPages: totalPages,
      buttonCount: 9,
      currentPage: 0
    });
  }

  handleSearchClick = req => {
    console.log(req);
    listing_Search_async(req).then(response => {
      const totalCount = response.totalCount;
      const totalPages = Math.floor(totalCount / req.pageSize + 1);
      this.setState({
        listings: response.pagedItems,
        totalCount: totalCount,
        totalPages: totalPages,
        buttonCount: 9,
        searchString: req.searchString,
        pageIndex: req.pageIndex,
        pageSize: req.pageSize,
        nonList: req.nonList,
        whiteList: req.whiteList,
        blackList: req.blackList,
        prevNone: req.prevNone,
        prevTakeDown: req.prevTakeDown,
        prevApproved: req.prevApproved,
        prevNotMyProperty: req.prevNotMyProperty,
        prevIgnore: req.prevIgnore,
        liveUrl: req.liveUrl,
        deadUrl: req.deadUrl
      });
    });
  };

  goTo = i => {
    console.log("GoTo clicked: " + i);
    const req = {
      searchString: this.state.searchString,
      pageIndex: i,
      pageSize: this.state.pageSize,
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
    listing_Search_async(req).then(response => {
      const totalCount = response.totalCount;
      const totalPages = Math.floor(totalCount / req.pageSize + 1);
      this.setState({
        listings: response.pagedItems,
        totalCount: totalCount,
        totalPages: totalPages,
        currentPage: i,
        buttonCount: 9
      });
    });
  };

  handleListingClick = id => {
    this.props.history.push("./listingedit/" + id);
  };

  render() {
    const {
      listings,
      totalPages,
      totalCount,
      buttonCount,
      currentPage
    } = this.state;

    return (
      <>
        <div className="menubar">
          <MenuBar />
        </div>
        <div>
          <SearchBar handleSearchClick={this.handleSearchClick} />
        </div>
        <div>
          <Paginator
            buttonCount={buttonCount}
            totalCount={totalCount}
            totalPages={totalPages}
            goTo={this.goTo}
            currentPage={currentPage}
          />
        </div>

        <div className={styles.resultContainer}>
          {listings.map(listing => (
            <div
              key={listing.id}
              className={
                listing.liveDead === "dead"
                  ? styles.resultCard + " " + styles.dead
                  : styles.resultCard
              }
              onClick={() => this.handleListingClick(listing.id)}
            >
              <img
                className={styles.resultImage}
                src={listing.imageUrl}
                alt=""
              />
              <div className={styles.resultHost}>
                <div> {listing.host} </div>
                <div> {listing.listId === 2 && "Blacklist"} </div>
                <div> {listing.listId === 1 && "Whitelist"} </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default withRouter(HomePage);
