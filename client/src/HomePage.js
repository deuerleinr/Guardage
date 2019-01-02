import React from "react";
import { listing_GetAll_async } from "./server";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";
import "./HomePage.css";

class HomePage extends React.Component {
  state = {
    listings: []
  };

  async componentDidMount() {
    const listings = await listing_GetAll_async();
    this.setState({ listings });
  }

  handleListingClick = id => {
    this.props.history.push("./listingedit/" + id);
  };

  render() {
    const { listings } = this.state;

    return (
      <>
        {/* <h1> This is the home page </h1>; */}
        <div className="menubar">
          <MenuBar />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="result-container">
          {listings.map(listing => (
            <div
              key={listing.id}
              className="result-card"
              onClick={() => this.handleListingClick(listing.id)}
            >
              <img className="result-image" src={listing.imageUrl} alt="" />
              <div className="result-host">
                {listing.listingUrl.split("/")[2]}{" "}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default withRouter(HomePage);
