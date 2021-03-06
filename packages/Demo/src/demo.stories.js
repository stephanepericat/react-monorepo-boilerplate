import React from "react";

import { Demo } from "./index";

export default {
title: "Boilerplate/Demo",
  component: Demo,
};

const Template = (args) => <Demo {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "demo"
};
