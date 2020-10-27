import React, { useContext } from "react";

import text from "./../../configs/text";
import { UserContext } from "./../../utils/utils";

const Details = () => {
  const { user } = useContext(UserContext);
  return user.users.length > 0 ? (
    <table>
      <tbody>
        <tr>
          <td>{text?.name} </td>
          <td>{text?.email} </td>
          <td>{text?.gender} </td>
        </tr>
        {user.users.map((user, i) => (
          <tr key={i}>
            <td>{user?.name}</td>
            <td>{user?.email} </td>
            <td>{user?.gender} </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    "No user added"
  );
};

export default Details;
