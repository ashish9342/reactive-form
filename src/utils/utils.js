import React from "react";

export const TypeActionHome = {
  SUBMIT: "submit",
  RESET: "reset"
};
export const inititalHomeState = { users: [] };
export const UserContext = React.createContext(inititalHomeState);
//  reducer
export const homeReducer = (state = inititalHomeState, action) => {
  console.log("state", state);
  switch (action.type) {
    case TypeActionHome.SUBMIT:
      return {
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};
