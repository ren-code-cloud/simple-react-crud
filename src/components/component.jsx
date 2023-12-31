import React from "react";
import { Form } from "react-router-dom";
import { connect } from "react-redux";
import { setName, addTodo, setDate } from "../actions/index.js";

const Component = ({ name, todos, date, setName, addTodo, setDate }) => {
  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Todos: {todos}</p>
      <p>Date: {date}</p>
      <Form method="post">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your todo"
          value={todos}
          onChange={(e) => handleAddTodo(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </Form>
      <Form>
        <button type="submit">Submit</button>
      </Form>
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
