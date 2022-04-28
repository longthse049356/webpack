import React from "react";
import Header from "./component/Header";

const App = () => {
  console.log(process.env.NODE_ENV);
  return <Header />;
};

export default App;
