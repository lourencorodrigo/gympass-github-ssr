import React from "react";

import { storiesOf } from "@storybook/react";

import TextField from "./TextField";

storiesOf("TextField", module).add("primary", () => (
  <TextField placeholder="TextField" />
));
