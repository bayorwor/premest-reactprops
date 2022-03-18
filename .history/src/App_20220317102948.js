import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
const App = () => {
  let cake = "chocolate";

  function sum(a, b) {
    return a + b;
  }

  return (
    <div>
      {cake}
      <NavBar cake={cake} sum={sum} header={<Header />} />
    </div>
  );
};

export default App;
