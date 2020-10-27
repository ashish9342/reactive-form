import React from "react";
import { shallow } from "enzyme";
import Routes from "./routes";
import { Home } from "./../pages/home/home";
import { Details } from "./../pages/details/Details";

import { Route } from "react-router-dom";

let pathMap = {};
describe("Testing Routes", () => {
  describe("routes using array of routers", () => {
    beforeAll(() => {
      const component = shallow(<Routes />);

      pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log("pathMap ", pathMap);
    });

    it("should show Home component for / router (getting array of routes)", () => {
      expect(pathMap["/"]).toBe(Home);
    });
    it("should show Details component for /details router", () => {
      expect(pathMap["/details"]).toBe(Details);
    });
  });
});
