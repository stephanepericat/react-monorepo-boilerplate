import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../src/index";
import "jest-styled-components";

describe("Button", () => {
  it("should render an anchor", () => {
    const component = renderer.create(<Button>Click Me</Button>);
    const tree = component.toJSON();

    expect(tree.type).toEqual("a");
    expect(tree.children).toEqual(["Click Me"]);
  });
});