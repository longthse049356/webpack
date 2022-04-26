import React from "react";
import ReactDom from "react-dom";
import Header from "./component/Header";

function App() {
  return <Header />;
}

ReactDom.render(<App />, document.getElementById("root"));
