const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "AUTHENTICATION_SUCCESS":
        return {
            ...state,
            isAuthenticated: true,
        };
    case "LOGIN_SUCCESS":
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
      };
    case "AUTHENTICATION_FAIL":
    case "LOGOUT":
    case "LOGIN_FAIL":
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
      };
    default:
        return state;
  }
}

export default reducer;
