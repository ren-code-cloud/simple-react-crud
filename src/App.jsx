import { Form, useLoaderData } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Simple Crud in React</h1>
      <Form method="post">
        <input placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
