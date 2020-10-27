import React from "react";
// import { render } from "@testing-library/react";
import Form from "./Form";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestArr, checkProps } from "./../../test/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Testing Form component", () => {});
