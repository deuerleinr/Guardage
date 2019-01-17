import axios from "axios";

export async function listing_Search_async(req) {
  console.log(req);
  let url =
    "/api/listings/search/?q=" +
    req.searchString +
    "&pageIndex=" +
    req.pageIndex +
    "&pageSize=" +
    req.pageSize +
    "&nonList=" +
    req.nonList +
    "&whiteList=" +
    req.whiteList +
    "&blackList=" +
    req.blackList +
    "&prevNone=" +
    req.prevNone +
    "&prevTakeDown=" +
    req.prevTakeDown +
    "&prevApproved=" +
    req.prevApproved +
    "&prevNotMyProperty=" +
    req.prevNotMyProperty +
    "&prevIgnore=" +
    req.prevIgnore;

  const resp = await axios.get(url);
  return resp.data;
}

// export function searchQuestions(req) {
//   let url =
//     "/api/surveyquestion/?searchstring=" +
//     req.searchString +
//     "&pageIndex=" +
//     req.pageIndex +
//     "&pageSize=" +
//     req.pageSize;

//   return axios.get(url, req);
// }

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
