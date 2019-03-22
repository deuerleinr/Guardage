import { createStore } from "redux";
import isEmpty from "./../Validation/is-empty";
import setAuthToken from "./../Login/SetAuthToken";

function reducer(state, action) {
  if (!state) {
    return {
      albumId: null,
      user: null,
      isAuthenticated: false,
      authToken: setAuthToken(false)
    };
  }
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
      isAuthenticated: !isEmpty(action.user)
    };
  }
  if ((action.type = "LOGOUT_USER")) {
    return {
      ...state,
      user: {},
      isAuthenticated: false,
      authToken: setAuthToken(false)
    };
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
