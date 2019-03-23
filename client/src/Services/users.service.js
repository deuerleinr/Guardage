import axios from "axios";

export function authenticateUser(token, id) {
  return axios.get(
    "/api/users/authentication?id_token=" + token + " +&oAuthId=" + id + ""
  );
}
