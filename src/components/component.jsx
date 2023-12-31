import React from "react";
import { connect } from "react-redux";
import { setName, addTodo, setDate } from "../actions/index.js";

const Component = ({ name, todos, date, setName, addTodo, setDate }) => {
  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleAddTodo = () => {
    addTodo("New Todo");
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Todos: {todos.join(", ")}</p>
      <p>Date: {date}</p>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <input
        type="date"
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
      />
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
