import React from "react";
import MenuBar from "./MenuBar";
import styles from "./ListingEdit.module.css";

class ListingEdit extends React.Component {
  state = {
    id: 4,
    listingUrl:
      "https://www.fronr.com/descendants-milo-goes-to-college-508ab08c75274-women-s-t-shirt-sky-womens-cotton-9339377-comfy",
    imageUrl: "https://www.fronr.com/bmz_cache/1/GR47IN.image.700x700.jpg",
    title:
      "  Descendants Milo Goes To College 508ab08c75274 Women's T-Shirt Sky Womens",
    sellerID: 3,
    price: 11.99,
    dateCreated: "2018-12-27",
    dateModified: "2018-12-27",
    Status: "pending"
  };

  componentDidMount = () => {
    console.log("at componentDidMount");
    console.log(this.props.match.params.id);
  };

  onClose = () => {
    this.props.history.push("../homepage");
  };

  render() {
    const { listingUrl, imageUrl, title, price } = this.state;
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
                <i className="fa fa-times " />
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
              <dt>Price:</dt> <dd> {price}</dd>
              <dt>URL Priors:</dt> <dd>None</dd>
              <dt>Status:</dt>
              <dd>
                <i className="fa fa-circle  " /> Online
              </dd>
            </dl>
            <div className={styles.btnGroup}>
              <button>
                <i className="fa fa-check" />
                <br />
                Approved Use
              </button>
              <button>
                <i className="fa fa-times" />
                <br />
                Not my property
              </button>
              <button>
                <i className="fa fa-minus" />
                <br />
                Ignore
              </button>
              <button className={styles.btnTakedown}>
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
      </>
    );
  }
}
export default ListingEdit;
