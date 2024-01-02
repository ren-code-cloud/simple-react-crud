import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import xtore from "./app/xtore.js";

export async function getDatas(query) {
  let datas = JSON.parse(localStorage.getItem("data")) || [];

  if (query) {
    datas = matchSorter(datas, query, { keys: ["id"] });
  }

  return datas.sort(sortBy("id", "name"));
}

//this function will create a data then filtered and set to our localstorage
export async function createData() {
  const reduxState = xtore.getState();
  const { name, todos, date } = reduxState;
  let id = Math.random().toString(36).substring(2, 9);
  let dataObject = { id, name, todos, date };
  let datas = await getDatas();
  datas.unshift(dataObject);
  await set(datas);
  return dataObject;
}
export async function getData(id) {
  let datas = await JSON.parse(localStorage.getItem("data"));
  let data = datas.find((data) => data.id === id);
  return data ?? null;
}

export async function updateData(id, updates) {
  let datas = await JSON.parse(localStorage.getItem("data"));
  let data = datas.find((data) => data.id === id);
  if (!data) throw new Error("No data found for", id);
  Object.assign(data, updates);
  await set(datas);
  return data;
}

export async function deleteData(id) {
  let datas = JSON.parse(localStorage.getItem("data"));
  let index = datas.findIndex((data) => data.id === id);
  if (index > -1) {
    datas.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(datas));
    return true;
  }
  return false;
}

function set(datas) {
  return localStorage.setItem("data", JSON.stringify(datas));
}
