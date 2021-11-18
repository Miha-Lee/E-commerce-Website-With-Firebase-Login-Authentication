export const initialState = {
  basket: [],
  loggedinUser: null,
};

const reducer = (state, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      ...state,
      loggedinUser: action.user,
    };
  }
};

export default reducer;
