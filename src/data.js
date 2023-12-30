export async function listData(query) {
  let arr = [];
}

export async function createData() {
  let id = Math.random().toString(36).substring(2, 9);
  let dataObject = { id, createdAt: new Date.now() };
  return dataObject;
}
