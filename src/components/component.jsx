import { Form, useLoaderData, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setName, addTodo, setDate } from "../actions/index.js";
import { createData, getDatas } from "../data.js";

export async function loader() {
  const users = await getDatas();
  return { users };
}

export async function action() {
  const user = await createData();
  return { user };
}
const Component = ({ name, todos, date, setName, addTodo, setDate }) => {
  const { users } = useLoaderData();
  console.log(users);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleState = () => {
    setDate("");
    setName("");
    addTodo("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handling form submission");
    console.table({ name, todos, date });

    try {
      await action();
    } catch (error) {
      console.error("Error creating data:", error);
    }

    handleState();
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Todos: {todos}</p>
      <p>Date: {date}</p>
      <Form method="post" onSubmit={handleSubmit} id="sheesh">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          name="name"
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your todo"
          value={todos}
          name="todos"
          onChange={(e) => handleAddTodo(e.target.value)}
        />
        <input
          type="date"
          value={date}
          name="date"
          onChange={(e) => handleDateChange(e.target.value)}
        />
        <button type="submit">Submit</button>
      </Form>
      <nav>
        {users.length ? (
          <ul>
            {users.map((item) => (
              <li key={item.id}>
                <Link to={`data/${item.id}`}>
                  {item.name ? <>{item.name}</> : <i>No Name</i>}{" "}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>Not found</div>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  todos: state.todos,
  date: state.date,
});

const mapDispatchToProps = {
  setName,
  addTodo,
  setDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
