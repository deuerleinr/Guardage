import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styles from "./Paginator.module.css";

class Paginator extends React.Component {
  render() {
    // console.log("PROPS FROM PAGINATOR", this.props);
    const { totalPages, currentPage, buttonCount } = this.props;

    let minPage = 0;
    const temp = currentPage - Math.floor(buttonCount / 2);
    if (temp > minPage) {
      minPage = temp;
    }
    // let minPage = Math.max(0, temp);
    const maxPage = Math.min(minPage + buttonCount - 1, totalPages - 1);
    minPage = Math.max(minPage, maxPage - buttonCount + 1);

    const paginationItems = [];
    for (let i = minPage; i <= maxPage; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => this.props.goTo(i)}
            className={this.props.currentPage === i ? "bg-primary" : ""}
            style={this.props.currentPage === i ? { color: "white" } : {}}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return (
      <React.Fragment>
        {this.props.totalPages ? (
          <div
            className={styles.paginator}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className={styles.counts}>
              Records found: {this.props.totalCount}
            </div>

            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink previous onClick={() => this.props.goTo(0)} />
              </PaginationItem>
              {paginationItems}
              <PaginationItem>
                <PaginationLink
                  next
                  onClick={() => this.props.goTo(this.props.totalPages - 1)}
                />
              </PaginationItem>
            </Pagination>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Paginator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  goTo: PropTypes.func,
  buttonCount: PropTypes.number
};

Paginator.defaultProps = {
  totalPages: 0,
  currentPage: 0,
  buttonCount: 9
};

export default Paginator;
