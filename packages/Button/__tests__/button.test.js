import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../src/index";
import "jest-styled-components";

describe("Button", () => {
  it("should render an anchor", () => {
    const args = { primary: false, text: "Click Me" };
    const component = renderer.create(<Button {...args} />);
    const tree = component.toJSON();

    expect(tree.type).toEqual("a");
    expect(tree.children).toEqual(["Click Me"]);
  });

  it("should style a primary button differently", () => {
    const args = { primary: true, text: "Click Me" };
    const component = renderer.create(<Button {...args} />);
    const tree = component.toJSON();

    expect(tree).toHaveStyleRule("background", "#ff7700");
  });
});
