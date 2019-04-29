import React from "react";
import { Input } from "reactstrap";
import styles from "./ListingCreate.module.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  listing_GetbyId_async,
  listing_Create_async,
  listing_Update_async,
  seller_GetAll_async,
  listing_Delete_async
} from "./server";
import MenuBar from "./MenuBar";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class ListingCreate extends React.Component {
  state = {
    appUserId: "",
    listingUrl: "",
    imageUrl: "",
    title: "",
    sellerId: 0,
    price: 0,
    dateCreated: "",
    dateModified: "",
    status: "pending",
    history: "",
    liveDead: "live",
    url: "",
    id: "",
    sellers: [],
    modal: false
  };

  async componentDidMount() {
    const url = this.props.match.url;
    this.setState({ url });
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      this.setState({ id }, () => {
        console.log("id = " + this.state.id);
        this.loadEditListing();
      });
    }
    this.loadSellerDropDown();
  }

  async loadEditListing() {
    const id = this.state.id;
    const resp = await listing_GetbyId_async(id);
    this.setState({
      appUserId: resp.appUserId,
      id: resp.id,
      listingUrl: resp.listingUrl,
      imageUrl: resp.imageUrl,
      title: resp.title,
      price: resp.price,
      sellerId: resp.sellerId,
      status: resp.status,
      history: resp.history,
      liveDead: resp.liveDead
    });

    console.log(resp);
  }

  async loadSellerDropDown() {
    const sellers = await seller_GetAll_async();
    // sort sellers alphabetically
    sellers.sort((a, b) => (a.host > b.host ? 1 : b.host > a.host ? -1 : 0));
    this.setState({ sellers }, () => {
      console.log("new thing");
      console.log(this.state.sellers);
    });
  }

  onClickSubmit = () => {
    if (this.state.id) {
      this.onSubmitUpdate();
    } else {
      this.onSubmitNewListing();
    }
  };

  async onSubmitNewListing() {
    const {
      appUserId,
      listingUrl,
      imageUrl,
      title,
      sellerId,
      price,
      dateCreated,
      dateModified,
      status,
      history,
      liveDead
    } = this.state;

    const req = {
      appUserId,
      listingUrl,
      imageUrl,
      title,
      sellerId,
      price,
      dateCreated,
      dateModified,
      status,
      history,
      liveDead
    };
    const response = await listing_Create_async(req);
    console.log(response);
    if (response.status >= 200 && response.status <= 299) {
      NotificationManager.success("New Listing Created");
    } else {
      NotificationManager.error("Database Insert Error");
    }
  }

  async onSubmitUpdate() {
    const {
      id,
      appUserId,
      listingUrl,
      imageUrl,
      title,
      price,
      sellerId,
      status,
      history,
      liveDead
    } = this.state;

    const req = {
      appUserId,
      id,
      listingUrl,
      imageUrl,
      title,
      price,
      sellerId,
      status,
      history,
      liveDead
    };
    const response = await listing_Update_async(id, req);
    if (response.status >= 200 && response.status <= 299) {
      NotificationManager.success("Status Updated");
      this.setState({ status, history });
    } else {
      alert("Update Error");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClose = () => {
    this.props.history.push("../listingList");
  };

  toggleConfirmModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  confirm = () => {
    this.toggleConfirmModal();
    this.DeleteListing(this.state.id);
  };

  async DeleteListing(id) {
    if (this.state.id !== -1) {
      const resp = await listing_Delete_async(id);
      if (resp.status >= 200 && resp.status <= 299) {
        NotificationManager.success("Listing Successfully Deleted");
      } else {
        NotificationManager.error("Database Insert Error");
      }
      this.props.history.push("../listingList");
    }
  }

  render() {
    const {
      appUserId,
      id,
      listingUrl,
      imageUrl,
      title,
      price,
      sellerId,
      status,
      history,
      liveDead,
      sellers
    } = this.state;
    const optionItems = sellers.map(seller => (
      <option key={seller.id} value={seller.id}>
        {seller.host}
        {"  ("}
        {seller.id}
        {")"}
      </option>
    ));

    return (
      <>
        <MenuBar />

        <Modal isOpen={this.state.modal} toggle={this.toggleConfirmModal}>
          <ModalHeader toggle={this.toggleConfirmModal}>
            &nbsp; DELETE
          </ModalHeader>
          <ModalBody>
            <span className={styles.confirmModalText}>
              Are you sure you want to delete this listing?
            </span>
          </ModalBody>
          <ModalFooter>
            <Button color="danger m-0" onClick={this.confirm}>
              Delete
            </Button>
            <Button color="primary" onClick={this.toggleConfirmModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div className={styles.mainContainer}>
          <div className={styles.header}>
            <button className={styles.btnClose} onClick={this.onClose}>
              <i className="fa fa-times" /> Close
            </button>
          </div>
          <div className={styles.formContainer}>
            <h3>{id ? "Edit Listing" : "Create Listing"}</h3>

            {id ? (
              <>
                <div>Listing ID:</div>
                <div>
                  <Input
                    className={styles.inputReadOnly}
                    type="text"
                    name="Id"
                    value={id}
                    readOnly
                  />
                </div>
              </>
            ) : (
              <></>
            )}

            <div>AppUserId:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="appUserId"
                value={appUserId}
                readOnly
              />
            </div>

            <div>Listing Url:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="listingUrl"
                value={listingUrl}
                onChange={this.onChange}
              />
            </div>

            <div>Image Url:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={this.onChange}
              />
            </div>

            <div>Title:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="title"
                value={title}
                onChange={this.onChange}
              />
            </div>

            <div>Price:</div>
            <div>
              <Input
                className={styles.input}
                type="number"
                name="price"
                value={price}
                onChange={this.onChange}
              />
            </div>

            <div>Seller Id:</div>
            <div>
              <Input
                className={styles.input}
                type="select"
                name="sellerId"
                value={sellerId}
                onChange={this.onChange}
              >
                {optionItems}
              </Input>
            </div>

            <div>Status:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="status"
                value={status}
                onChange={this.onChange}
              />
            </div>

            <div>History:</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="history"
                value={history}
                onChange={this.onChange}
              />
            </div>
            <div>Live/Dead Listing URL</div>
            <div>
              <Input
                className={styles.input}
                type="text"
                name="liveDead"
                value={liveDead}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className={styles.footer}>
            {id ? (
              <i>
                <button
                  className={styles.btnSubmitUpdate}
                  onClick={() => this.onClickSubmit()}
                >
                  <i className="fa fa-check mr-2" />
                  {"  "}
                  Submit Update
                </button>
                <button
                  className={styles.btnDelete}
                  onClick={this.toggleConfirmModal}
                >
                  <i className="far fa-trash-alt" />
                  {"  "}
                  Delete
                </button>
              </i>
            ) : (
              <i>
                {" "}
                <button
                  className={styles.btnSubmitNewListing}
                  onClick={() => this.onClickSubmit()}
                >
                  <i className="fa fa-check mr-2" />
                  {"  "}
                  Submit New Listing
                </button>{" "}
              </i>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ListingCreate;
