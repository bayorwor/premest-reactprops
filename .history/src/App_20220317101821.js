import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  let cake = "chocolate";

  return (
    <div>
      {cake}
      <NavBar cake={cake} />
    </div>
  );
};

export default App;
