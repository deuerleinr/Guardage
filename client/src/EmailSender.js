import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./EmailSender.module.css";
import { email_Send_async } from "./server";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class EmailSender extends React.Component {
  state = {
    stuff: ""
  };

  onSendEmail = () => {
    const { infringingHost, infringingUrl, infringingEmail } = this.props;
    const req = { infringingHost, infringingUrl, infringingEmail };
    email_Send_async(req).then(res => {
      if (res.status >= 200 && res.status <= 299) {
        NotificationManager.success("Email Sent to Seller");
        console.log("Email Successfully Sent");
      } else {
        NotificationManager.error("Email Error");
        console.log("Email Sending Error");
      }
      this.props.onCloseModalAfterSendingEmail();
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <div className={styles.root}>
          <div className={styles.infringingEmail}>
            <label htmlFor="infringingEmail">Infringing Email </label>
            <input
              type="text"
              name="infringingEmail"
              value={this.props.infringingEmail}
              style={{ width: "100%" }}
              onChange={this.onChange}
            />
          </div>

          <div className={styles.infringingHost}>
            <label htmlFor="infringingHost">Infringing Host</label>
            <input
              type="text"
              name="infringingHost"
              value={this.props.infringingHost}
              style={{ width: "100%" }}
              onChange={this.onChange}
            />
          </div>

          <div className={styles.infringingUrl}>
            <label htmlFor="infringingUrl">Infringing URL</label>
            <textarea
              id="infringingUrl"
              name="infringingUrl"
              rows="5"
              cols="33"
              value={this.props.infringingUrl}
              onChange={this.onChange}
              style={{ width: "100%" }}
            />
          </div>

          <div className={styles.btnRow}>
            <button className={styles.btn} onClick={() => this.onSendEmail()}>
              Submit
            </button>
          </div>

          <div className={styles.templateTitle}>Email Template</div>
          <div className={styles.template}>
            <p>NOTICE OF DMCA VIOLATION AND REQUEST FOR TAKE-DOWN</p>
            Re: Your listing at: <b>{this.props.infringingUrl}</b>
            {/* <a href={this.state.infringingUrl}>{this.state.infrigingUrl}</a> */}
            <p>
              To: <b>{this.props.infringingHost}</b>
            </p>
            <p>
              The subject listing infringes upon my property rights as the owner
              of the "Milo" caricature (US Copyright Office reg no VA
              2-059-772), which is used exclusively under license by the rock
              band "Descendents". (Parent company: the All Group).
            </p>
            <p>
              Please remove the listing from your website immediately.
              Authorized use of my copyrighted image and Descendents
              copyright-protected images can be found on the Kings Road Merch
              website: https://kingsroadmerch.com/descendents/.
            </p>
            <p>
              I have a good faith belief that the disputed use is not authorized
              by the copyright, or its owner, or agents, or the law, and that
              the information in this notice is accurate. I state under penalty
              of perjury that I am the copyright or intellectual property owner
              of the Milo caricature. Additionally, I am authorized to act on
              behalf of the All Group/Descendents for intellectual property
              matters related to merchandise.
            </p>
            Regards,
            <br />
            <br /> Rodger Deuerlein
            <br />
            <br /> Owner/Licensor of the "Milo" caricature
            <br />
            Agent for Merchandise Integrity, All Group/Descendents
            <br /> 2012 Springfield Avenue
            <br /> Hermosa Beach, CA 90254 <br />
            tel: 310-245-8954
            <br />
            rodger.deuerlein@gmail.com
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(EmailSender);
