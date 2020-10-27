import React, { useState } from "react";
import PropTypes from "prop-types";

export const Accordian = ({ heading, children }) => {
  const [toggle, setToggle] = useState("block");

  const toggleAccordian = (e) => {
    const panel = e.target.nextSibling;

    if (toggle === "block") {
      setToggle("none");
      panel.style.display = "none";
    } else {
      setToggle("block");
      panel.style.display = "block";
    }
  };
  return (
    <div className="accordian" data-test="component-accordion">
      <h4 data-test="accordion-heading" onClick={(e) => toggleAccordian(e)}>
        {heading}
      </h4>
      <div className="panel" data-test="accordion-panel">
        {children}
      </div>
    </div>
  );
};
export default Accordian;

Accordian.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
