import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateData } from "../data.js";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateData(params.dataId, updates);
  return redirect(`/data/${params.dataId}`);
}

function Update() {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  return (
    <Form method="post" id="data-form">
      <p className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          placeholder="Name"
          aria-label="name"
          type="text"
          name="name"
          defaultValue={data.name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      <p className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Todos
        </label>
        <textarea
          placeholder="Enter your todos"
          aria-label="Todos"
          name="todos"
          className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      <p className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          name="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      <p className="flex">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}

export default Update;
