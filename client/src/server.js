import axios from "axios";

// export function listing_GetAll() {
//   return axios.get("/api/listings").then(response => resp.data);
// }

export async function listing_GetAll_async() {
  const resp = await axios.get("/api/listings");
  return resp.data;
}
