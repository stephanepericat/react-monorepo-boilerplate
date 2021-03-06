import React from "react";

import { Button } from "./index";

export default {
  title: "Boilerplate/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "click me",
  primary: true
};
