import React, { useContext } from "react";
import { TypeActionHome, UserContext } from "./../../utils/utils";
import Accordian from "./../../components/accordian/accordian";
import Form from "./../../components/form/Form";

const Home = () => {
  // const [store, dispatch] = React.useReducer(homeReducer, inititalHomeState);
  const { dispatch } = useContext(UserContext);

  // console.log(TypeActionHome);
  const onSubmit = (userInfo) => {
    dispatch({
      type: TypeActionHome.SUBMIT,
      payload: userInfo
    });
  };

  return (
    <Accordian heading={"Form"}>
      <Form onSubmit={onSubmit} />
    </Accordian>
  );
};

export default Home;
