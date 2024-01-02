import { redirect } from "react-router-dom";
import { deleteData } from "../data.js";

export async function action({ params }) {
  console.log(params);
  await deleteData(params.dataId);
  return redirect("/");
}
