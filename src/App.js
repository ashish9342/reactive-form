import React, { useReducer } from "react";
import "./styles.css";
import Routes from "./Routes/routes";
import { UserContext, homeReducer, inititalHomeState } from "./utils/utils";

export default function App() {
  const [user, dispatch] = useReducer(homeReducer, inititalHomeState);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Routes />
    </UserContext.Provider>
  );
}
