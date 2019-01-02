import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className="searchbar root">
          <div className="search">
            <input type="text" name="search" />{" "}
          </div>

          <div className="sellers">
            <div className="outdent">Sellers:</div>
            <div>
              <input type="checkbox" name="non-list" value="1" />
              Non-list
            </div>
            <div>
              <input type="checkbox" name="whitelist" value="1" />
              Whitelist
            </div>
            <div>
              <input type="checkbox" name="blacklist" value="1" />
              Blacklist
            </div>
          </div>

          <div className="priors">
            <div className="outdent">Previous action on URL: </div>
            <div>
              <input type="checkbox" name="unmarked" value="1" />
              None
            </div>
            <div>
              <input type="checkbox" name="approved" value="1" />
              marked "approved use"
            </div>
            <div>
              <input type="checkbox" name="notMyProperty" value="1" />
              marked "not my property"
            </div>
          </div>

          <div className="priors2">
            {" "}
            <div className="outdent" />
            <div>
              <input type="checkbox" name="ignore" value="1" />
              marked "ignore"
            </div>
            <div>
              <input type="checkbox" name="priorTakeDown" value="1" />
              Take-Down actions
            </div>
          </div>

          <div className="deadlive">
            <input type="checkbox" name="liveUrl" value="1" />
            With live URLs
            <input type="checkbox" name="deadUrl" value="1" />
            With dead URLs
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
