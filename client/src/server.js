import axios from "axios";

// export function listing_GetAll() {
//   return axios.get("/api/listings").then(response => resp.data);
// }

export async function listing_GetAll_async() {
  const resp = await axios.get("/api/listings");
  return resp.data;
}

export async function listing_GetbyId_async(id) {
  const resp = await axios.get("/api/listings/" + id);
  return resp.data;
}

export async function listing_Update_async(id, req) {
  const resp = await axios.put("/api/listings/" + id, req);
  return resp;
}

export async function listing_Create_async(req) {
  const resp = await axios.post("/api/listings", req);
  return resp;
}

export async function email_Send_async(req) {
  const resp = await axios.post("/api/listings/email", req);
  return resp;
}

export async function seller_Create_async(req) {
  const resp = await axios.post("/api/sellers", req);
  return resp;
}

export async function seller_GetAll_async() {
  const resp = await axios.get("/api/sellers");
  return resp.data;
}
