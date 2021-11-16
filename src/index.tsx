import * as React from "react";
import ReactDOM from "react-dom";

import { App } from "./containers";

const AppWrapper = () => {
  return <App />;
};

ReactDOM.render(<AppWrapper />, document.getElementById("app-root"));
