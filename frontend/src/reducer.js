const reducer = (
  state = {
    items: 0,
    connect: false
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: state.items + 1
      };
    case "LESS":
      return {
        ...state,
        items: state.items - 1
      };
    case "CONNECT":
      return {
        ...state,
        connect: true
      };
    case "DECONNECT":
      return {
        ...state,
        connect: false
      };
    default:
      return state;
  }
};

export default reducer;
