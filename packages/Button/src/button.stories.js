import React from "react";

import { Button } from "./index";

export default {
  title: "Boilerplate/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: "click me",
  primary: true
};

Default.argTypes = {
  onClick: { 
    action: "clicked"
  }
};
