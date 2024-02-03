// AuthReducer.js

// This is a simple AuthReducer that can be used with useReducer hook in React
const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          currentUser: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          currentUser: null,
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  