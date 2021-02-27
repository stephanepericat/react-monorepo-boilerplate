import React from "react";
import renderer from "react-test-renderer";
import { Demo } from "../src/index";
import "jest-styled-components";

describe("Demo", () => {
  it("should render some text", () => {
    const args = { text: "demo" };
    const component = renderer.create(<Demo {...args} />);
    const tree = component.toJSON();

    expect(tree.type).toEqual("div");
    expect(tree.children).toEqual([args.text]);
  });
});
