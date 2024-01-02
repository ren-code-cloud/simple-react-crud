import { Form, useLoaderData, Link } from "react-router-dom";
import { getData } from "../data.js";

export async function loader({ params }) {
  const data = await getData(params.dataId);
  console.log(data);
  return { data };
}

function DataComponent() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Name : {data.name}</h1>
      <h3>Todo : {data.todos}</h3>
      <h3>Date : {data.date}</h3>
      <div>
        <Form action="edit">
          <button
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-4 rounded"
            type="submit"
          >
            Edit
          </button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button
            className="bg-red-500 hover:bg-red-700
        text-white font-bold m-1 py-1 px-4 rounded"
            type="submit"
          >
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
}

export default DataComponent;
