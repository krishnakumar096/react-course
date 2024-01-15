import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React!"
); // Use a valid HTML tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
