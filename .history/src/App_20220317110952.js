import React from "react";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

function App() {
  let title = "My first react app";

  return (
    <div>
      <NavBar title={title} />
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
