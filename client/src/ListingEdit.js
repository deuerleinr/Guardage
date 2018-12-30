import React from "react";
import MenuBar from "./MenuBar";

class ListingEdit extends React.Component {
  state = {
    listingUrl: ""
  };

  componentDidMount = () => {
    console.log("at componentDidMount");
    console.log(this.props.match.params.id);
  };

  render() {
    const listingId = this.props.match.params.id;
    return (
      <>
        <MenuBar />
        <h3> Editing listing number:{listingId} </h3>
      </>
    );
  }
}
export default ListingEdit;
