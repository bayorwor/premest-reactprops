import React from "react";
import NavBar from "./components/NavBar";

function App() {
  let title = "My first react app";

  return (
    <div>
      <NavBar title={title} />
    </div>
  );
}

export default App;
