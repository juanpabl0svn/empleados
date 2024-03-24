export default function authReducer(state, action) {
  switch (action.type) {
    case "SET_ROUTE":
      return {
        ...state,
        route: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };

    default:
      return state;
  }
}
