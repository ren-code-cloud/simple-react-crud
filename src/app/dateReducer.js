const dateReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_DATE":
      return action.payload;
    default:
      return state;
  }
};

export default dateReducer;
