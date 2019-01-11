import React from "react";
import MenuBar from "./MenuBar";
import styles from "./ListingEdit.module.css";
import { listing_GetbyId_async, listing_Update_async } from "./server";
import { Button, Modal } from "reactstrap";
import EmailSender from "./EmailSender";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class ListingEdit extends React.Component {
  state = {
    id: "",
    listingUrl: "",
    imageUrl: "",
    title: " ",
    sellerID: 0,
    price: 0,
    dateCreated: "",
    dateModified: "",
    Status: "",
    modal: false,
    dateToday: "",
    history: "",
    liveDead: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const l = await listing_GetbyId_async(id);
    this.setState({
      id: l.id,
      listingUrl: l.listingUrl,
      imageUrl: l.imageUrl,
      title: l.title,
      sellerId: l.sellerId,
      dateCreated: l.dateCreated,
      dateModified: l.dateModified,
      price: l.price,
      status: l.status,
      history: l.history,
      liveDead: l.liveDead
    });
  }

  onClose = () => {
    this.props.history.push("../homepage");
  };

  onChangeStatus = newStatus => {
    const dateToday = this.getDate();
    this.setState({ dateToday }, () => {
      const newHistory = newStatus + " " + dateToday + " ";
      this.onUpdateStatus(newStatus, newHistory);
    });
  };

  async onUpdateStatus(newStatus, newHistory) {
    const {
      id,
      listingUrl,
      imageUrl,
      title,
      sellerId,
      price,
      liveDead
    } = this.state;
    const status = newStatus;
    let history = this.state.history;
    if (history) {
      history = history + ", " + newHistory;
    } else {
      history = newHistory;
    }

    const req = {
      id,
      listingUrl,
      imageUrl,
      title,
      sellerId,
      price,
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

  onSubmitTakeDown = () => {
    this.onToggleDMCAModal();
  };

  onCloseModalAfterSendingEmail = () => {
    const modal = this.state.modal;
    this.setState({ modal: !modal }, () => {
      this.onChangeStatus("DMCA");
    });
  };

  getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today
      .getFullYear()
      .toString()
      .substr(-2);
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    const dateToday = mm + "/" + dd + "/" + yy;
    return dateToday;
  };

  onToggleDMCAModal = () => {
    const modal = this.state.modal;
    this.setState({ modal: !modal });
  };

  render() {
    const {
      listingUrl,
      imageUrl,
      title,
      price,
      status,
      liveDead,
      history
    } = this.state;
    // const listingId = this.props.match.params.id;

    return (
      <>
        <MenuBar />

        <div className={styles.root}>
          <div className={styles.upperHost}>{listingUrl.split("/")[2]}</div>
          <div className={styles.upperActions + " " + styles.parent}>
            <div className={styles.column}>
              <table>
                <tbody>
                  <tr>
                    <td className={styles.outdent}>Site Priors</td>
                    <td className={styles.priorNumber}>4</td>
                  </tr>
                  <tr>
                    <td> Adverse:</td>
                    <td className={styles.adverse}>3</td>
                  </tr>
                  <tr>
                    <td> Approved:</td>
                    <td className={styles.priorNumber}>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.column}>
              <button className={styles.btnWhiteList}>
                Add Site to White List
              </button>
              <br />
              <button className={styles.btnBlackList}>
                Add Site to Black List
              </button>
            </div>
            <div className={styles.column}>
              <button
                className={styles.btnClose}
                onClick={() => this.onClose()}
              >
                <i className="fa fa-times" style={{ color: "gray" }} />
              </button>
            </div>
          </div>
          <div className={styles.leftArrow}>
            <i className="fas fa-chevron-left" />
          </div>
          <div className={styles.middleImage}>
            <img src={imageUrl} alt="" />
          </div>
          <div className={styles.middleActions}>
            <dl>
              <dt>Listing URL:</dt>
              <dd>
                <a href={listingUrl} target="_blank" rel="noopener noreferrer">
                  {listingUrl}
                </a>
              </dd>
              <dt>Image URL:</dt>
              <dd>
                <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                  {imageUrl}
                </a>
              </dd>
              <dt>Title:</dt> <dd> {title}</dd>
              <dt>Price:</dt> <dd> {price}</dd> <dt>History:</dt>
              <dd>{history}</dd>
              <dt>URL Status:</dt>
              {/dmca/i.test(status) ? (
                <>
                  <dd style={{ color: "red" }}>{status}</dd>
                </>
              ) : (
                <>
                  <dd>{status}</dd>
                </>
              )}
              <dt style={{ fontSize: ".9em", marginTop: "3px" }}>
                Live/Dead URL?
              </dt>
              <dd>
                {/* <div className={styles.upperActions + " " + styles.parent}> */}
                <i
                  className="fa fa-circle"
                  style={{
                    color: "rgb(54, 234, 123",
                    marginRight: "10px",
                    marginBottom: "2px",
                    fontSize: ".75em"
                  }}
                />
                {liveDead}
              </dd>
            </dl>
            <div className={styles.btnGroup}>
              <button
                className={styles.btnThree}
                onClick={() => this.onChangeStatus("Approved-Use")}
              >
                <i className="fa fa-check" />
                <br />
                Approved Use
              </button>
              <button
                className={styles.btnThree}
                onClick={() => this.onChangeStatus("Non-Property")}
              >
                <i className="fa fa-times" />
                <br />
                Not my property
              </button>
              <button
                className={styles.btnThree}
                onClick={() => this.onChangeStatus("Ignore")}
              >
                <i className="fa fa-minus" />
                <br />
                Ignore
              </button>
              <button
                className={styles.btnTakedown}
                onClick={this.onSubmitTakeDown}
              >
                SUBMIT
                <br />
                TAKE DOWN
              </button>
            </div>
          </div>
          <div className={styles.rightArrow}>
            <i className="fas fa-chevron-right" />
          </div>
          <div className={styles.lowerActions} />
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggleDMCAModal}
          className={styles.modal}
        >
          <div className={styles.modalRoot}>
            <div className={styles.modalTitle}>
              <h2>Send Take-down email</h2>
            </div>
            <div className={styles.modalClose}>
              <Button
                className={styles.modalBtnClose}
                onClick={this.onToggleDMCAModal}
              >
                <i className="fa fa-times" />
              </Button>
            </div>
            <div className={styles.modalEmailSender}>
              <EmailSender
                infringingHost={listingUrl.split("/")[2]}
                infringingUrl={listingUrl}
                infringingEmail="myjacobwright@gmail.com"
                onCloseModalAfterSendingEmail={
                  this.onCloseModalAfterSendingEmail
                }
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default ListingEdit;
