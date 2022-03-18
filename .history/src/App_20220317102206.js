import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  let cake = "chocolate";

  function sum(a, b) {
    return a + b;
  }

  return (
    <div>
      {cake}
      <NavBar cake={cake} />
    </div>
  );
};

export default App;
