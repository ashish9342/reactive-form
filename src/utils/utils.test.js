import { homeReducer, inititalHomeState, TypeActionHome } from "./utils";

describe("Testing utilTest", () => {
  describe("test > homeReducer", () => {
    test("Should return correct store when TypeActionHome.SUBMIT is dispatched", () => {
      const update = {
        name: "Foo",
        email: "Bar",
        gender: "other"
      };

      const newState = homeReducer(inititalHomeState, {
        type: TypeActionHome.SUBMIT,
        payload: update
      });

      expect(newState.users).toBeDefined();
      expect(newState.users).toEqual([update]);
    });
  });

  describe("test > homeReducer", () => {
    test("Should return correct store when TypeActionHome.SUBMIT is dispatched", () => {
      const update = {
        name: "Foo",
        email: "Bar",
        gender: "other"
      };

      const newState = homeReducer(inititalHomeState, {
        type: TypeActionHome.SUBMIT,
        payload: update
      });

      expect(newState.users).toBeDefined();
      expect(newState.users).toEqual([update]);
    });
  });
});
