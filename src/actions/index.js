export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const setDate = (date) => ({
  type: "SET_DATE",
  payload: date,
});
