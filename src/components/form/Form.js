import React from "react";
import text from "./../../configs/text";

export const Form = ({ onSubmit }) => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    gender: "male"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email) {
      handleStateChange(
        "error",
        "Error! All fields are required. They cannot be empty."
      );
      return;
    }

    const formData = { ...formState };
    if (formData.error) {
      delete formData.error;
    }

    onSubmit(formData);
  };

  const handleStateChange = (index, value) => {
    setFormState((state) => ({
      ...state,
      [index]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formState.error && (
        <>
          <div style={{ color: "red" }}>{formState.error}</div>
        </>
      )}
      <div>
        <input
          type={"text"}
          placeholder={"Name"}
          value={formState.name}
          onChange={(e) => handleStateChange("name", e.target.value)}
        />
      </div>
      <div>
        <input
          type={"email"}
          placeholder={"Email"}
          value={formState.email}
          onChange={(e) => handleStateChange("email", e.target.value)}
        />
      </div>
      <div>
        <select onChange={(e) => handleStateChange("gender", e.target.value)}>
          <option value={"male"}>{text?.male}</option>
          <option value={"female"}>{text?.female}</option>
          <option value={"other"}>{text?.other}</option>
        </select>
      </div>
      <div>
        <button type={"submit"}>{text?.submit}</button>
      </div>
    </form>
  );
};

export default Form;
