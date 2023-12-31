// import localforage from "localforage";
// import { matchSorter } from "match-sorter";
// import sortBy from "sort-by";

// export async function getContacts(query) {
//   let datas = await localforage.getItem("data");
//   if (!datas) datas = [];
//   if (query) {
//     datas = matchSorter(datas, query, { keys: ["first", "last"] });
//   }
//   return datas.sort(sortBy("last", "createdAt"));
// }
export async function createData() {
  let id = Math.random().toString(36).substring(2, 9);
  let dataObject = { id, createdAt: Date.now() };
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

// function set(datas) {
//   return localforage.setItem("data", datas);
// }
