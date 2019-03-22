import React from "react";
import { listing_Search_async } from "./server";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";
import styles from "./ListingList.module.css";
import Paginator from "./Paginator";
import MenuBar from "./MenuBar";

class ListingList extends React.Component {
  state = {
    listings: [],
    totalCount: 0,
    totalPages: 0,
    searchString: "",
    pageIndex: 0,
    pageSize: 10000,
    nonList: true,
    whiteList: true,
    blackList: true,
    prevNone: true,
    prevTakeDown: true,
    prevApproved: true,
    prevNotMyProperty: true,
    prevIgnore: true,
    liveUrl: true,
    deadUrl: true
  };

  async componentDidMount() {
    const req = {
      searchString: "",
      pageIndex: 0,
      pageSize: 10000,
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
    this.setState(
      {
        listings: response.pagedItems,
        totalCount: totalCount,
        totalPages: totalPages,
        buttonCount: 9,
        currentPage: 0
      },
      () => {
        console.log(this.state.listings);
      }
    );
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

        <div className={styles.headerContainer}>
          <div className={styles.rootHeader}>
            <div className={styles.count}>No.</div>
            <div className={styles.id}>ID</div>
            <div className={styles.dateFound}>Date</div>
            <div className={styles.host}> Host </div>
            <div className={styles.title}>Title</div>
            <div className={styles.url}>URL</div>
            <div className={styles.price}>Price</div>
            <div className={styles.lastAction}>Last Action</div>
            <div className={styles.deadLive}>Live/Dead</div>
            <div className={styles.imageDiv}>Image</div>
          </div>
        </div>

        <div className={styles.listingContainer}>
          {listings.map(listing => (
            <div
              key={listing.id}
              onClick={() => this.handleListingClick(listing.id)}
              className={styles.root}
            >
              <div className={styles.count}>888</div>
              <div className={styles.id}>{listing.id}</div>
              <div className={styles.dateFound}>{listing.dateCreated}</div>
              <div className={styles.host}> {listing.host} </div>
              <div className={styles.title}>{listing.title}</div>
              <div className={styles.url}>{listing.listingUrl}</div>
              <div className={styles.price}>{listing.price}</div>
              <div className={styles.lastAction}>{listing.status}</div>
              <div className={styles.deadLive}>{listing.liveDead}</div>
              <div className={styles.imageDiv}>
                <img
                  className={styles.listingImage}
                  src={listing.imageUrl}
                  alt="shirt"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default withRouter(ListingList);
// export default ListingList;
