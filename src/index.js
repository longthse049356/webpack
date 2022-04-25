import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Hello 2</h1>
      <h1>Hello 3</h1>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
