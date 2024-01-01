import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getDatas(query) {
  let datas = JSON.parse(localStorage.getItem("data")) || [];

  if (query) {
    datas = matchSorter(datas, query, { keys: ["id"] });
  }

  return datas.sort(sortBy("id", "createdAt"));
}

export async function createData() {
  let id = Math.random().toString(36).substring(2, 9);
  let dataObject = { id, createdAt: Date.now() };
  let datas = await getDatas();
  datas.unshift(dataObject);
  await set(datas);
  return dataObject;
}
// export async function getContact(id) {
//   await fakeNetwork(`contact:${id}`);
//   let contacts = await localforage.getItem("contacts");
//   let contact = contacts.find((contact) => contact.id === id);
//   return contact ?? null;
// }

// export async function updateContact(id, updates) {
//   await fakeNetwork();
//   let contacts = await localforage.getItem("contacts");
//   let contact = contacts.find((contact) => contact.id === id);
//   if (!contact) throw new Error("No contact found for", id);
//   Object.assign(contact, updates);
//   await set(contacts);
//   return contact;
// }

// export async function deleteContact(id) {
//   let contacts = await localforage.getItem("contacts");
//   let index = contacts.findIndex((contact) => contact.id === id);
//   if (index > -1) {
//     contacts.splice(index, 1);
//     await set(contacts);
//     return true;
//   }
//   return false;
// }

function set(datas) {
  return localStorage.setItem("data", JSON.stringify(datas));
}
