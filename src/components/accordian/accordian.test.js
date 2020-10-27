import React from "react";
// import { render } from "@testing-library/react";
import Accordian from "./accordian";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestArr, checkProps } from "./../../test/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { heading: "Form" };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, props };
  return shallow(<Accordian {...setupProps} />);
};

describe("Testing Accordion component", () => {
  test("Rendering Accordion", () => {
    const wrapper = setup();
    const accordianComponent = findByTestArr(wrapper, "component-accordion");
    expect(accordianComponent.length).toBe(1);
  });

  test("Rendering Accordion heading", () => {
    const wrapper = setup();
    const heading = findByTestArr(wrapper, "accordion-heading");
    expect(heading.length).toBe(1);
  });

  test("Rendering Accordion heading without props", () => {
    const wrapper = setup();
    const heading = findByTestArr(wrapper, "accordion-heading").text();
    expect(heading.length).toBe(4);
    // length of Form text
    // changed to default
  });

  test("Rendering Accordion heading with props", () => {
    // const wrapper = setup({ heading: true });
    const wrapper = setup({ heading: "Form" });

    const heading = findByTestArr(wrapper, "accordion-heading").text();
    expect(heading.length).not.toBe(0);
  });

  test("Rendering Accordion panel", () => {
    const wrapper = setup();
    const panel = findByTestArr(wrapper, "accordion-panel");
    expect(panel.length).toBe(1);
  });

  test("does not throw warning with expected props", () => {
    const expectedProps = { heading: "Form" };
    checkProps(<Accordian />, expectedProps);
  });
});
