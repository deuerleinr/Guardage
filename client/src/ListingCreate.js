import React from "react";
import { Input } from "reactstrap";
import styles from "./ListingCreate.module.css";
import {
  listing_Create_async,
  seller_Create_async,
  seller_GetAll_async
} from "./server";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class ListingCreate extends React.Component {
  state = {
    reqListing: {
      listingUrl: "",
      imageUrl: "",
      title: "",
      sellerId: 0,
      price: 0,
      dateCreated: "",
      dateModified: "",
      status: "pending",
      history: "",
      liveDead: "live"
    },
    reqSeller: {
      host: "",
      dmcaEmail: "",
      listId: 0,
      otherEmail: "",
      phone: "",
      street: "",
      street2: "",
      city: "",
      state: "",
      postalCode: "",
      country: ""
    },
    sellers: []
  };

  async componentDidMount() {
    const sellers = await seller_GetAll_async();
    //sort sellers alphabetically
    sellers.sort((a, b) => (a.host > b.host ? 1 : b.host > a.host ? -1 : 0));
    this.setState({ sellers }, () => {
      console.log(this.state.sellers);
    });
  }

  async onSubmitListing() {
    const req = this.state.reqListing;
    const response = await listing_Create_async(req);
    if (response.status >= 200 && response.status <= 299) {
      NotificationManager.success("New Listing Created");
    } else {
      NotificationManager.error("Database Insert Error");
    }
  }

  async onSubmitSeller() {
    const req = this.state.reqSeller;
    const response = await seller_Create_async(req);
    if (response.status >= 200 && response.status < 300) {
      NotificationManager.success("New Seller Created");
    } else {
      NotificationManager.error("Database Insert Error");
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      reqListing: {
        ...state.reqListing,
        [name]: value
      }
    }));
  };

  onChangeSeller = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      reqSeller: {
        ...state.reqSeller,
        [name]: value
      }
    }));
  };

  onClose = () => {
    this.props.history.push("../homepage");
  };

  render() {
    let sellers = this.state.sellers;
    let optionItems = sellers.map(seller => (
      <option key={seller.id} value={seller.id}>
        {seller.host}
        {"  ("}
        {seller.id}
        {")"}
      </option>
    ));

    return (
      <>
        <div className={styles.root}>
          <div className={styles.topArea}>
            <button className={styles.btnClose} onClick={this.onClose}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div className={styles.listingContainer}>
            <h3>Create Listing</h3>

            <div>Listing Url:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="listingUrl"
                value={this.state.reqListing.listingUrl}
                onChange={this.onChange}
              />
            </div>

            <div>Image Url:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="imageUrl"
                value={this.state.reqListing.imageUrl}
                onChange={this.onChange}
              />
            </div>

            <div>Title:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="title"
                value={this.state.reqListing.title}
                onChange={this.onChange}
              />
            </div>

            <div>Price:</div>
            <div>
              <input
                className={styles.input}
                type="number"
                name="price"
                value={this.state.reqListing.price}
                onChange={this.onChange}
              />
            </div>

            <div>Seller Id:</div>
            <div>
              {/* 
              <input
                className={styles.input}
                type="text"
                name="sellerId"
                value={this.state.reqListing.sellerId}
                onChange={this.onChange}
              /> */}

              <Input
                className={styles.input}
                type="select"
                name="sellerId"
                value={this.state.reqListing.sellerId}
                onChange={this.onChange}
              >
                {optionItems}
              </Input>
            </div>

            <div>Status:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="status"
                value={this.state.reqListing.status}
                onChange={this.onChange}
              />
            </div>

            <button
              className={styles.btnSubmit}
              onClick={() => this.onSubmitListing()}
            >
              Submit
            </button>
          </div>

          <div className={styles.sellerContainer}>
            <h3>Create Seller</h3> <div>Host:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="host"
                value={this.state.reqSeller.host}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>DMCA Email:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="dmcaEmail"
                value={this.state.reqSeller.dmcaEmail}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>List ID:</div>
            <div>
              <Input
                className={styles.input}
                type="select"
                name="listId"
                value={this.state.reqSeller.listId}
                onChange={this.onChangeSeller}
              >
                <option value="0">No List</option>
                <option value="1'">Whitelist</option>
                <option value="2">Blacklist</option>
                <option value="5">Testing</option>
              </Input>
            </div>
            <div>Other Email:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="otherEmail"
                value={this.state.reqSeller.otherEmail}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>Phone:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="phone"
                value={this.state.reqSeller.phone}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>Street:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="street"
                value={this.state.reqSeller.street}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>Street2:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="street2"
                value={this.state.reqSeller.street2}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>City:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="city"
                value={this.state.reqSeller.city}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>state:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="state"
                value={this.state.reqSeller.state}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>Postal Code:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="postalCode"
                value={this.state.reqSeller.postalCode}
                onChange={this.onChangeSeller}
              />
            </div>
            <div>Country:</div>
            <div>
              <input
                className={styles.input}
                type="text"
                name="country"
                value={this.state.reqSeller.country}
                onChange={this.onChangeSeller}
              />
            </div>
            <button
              className={styles.btnSubmit}
              onClick={() => this.onSubmitSeller()}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default ListingCreate;
