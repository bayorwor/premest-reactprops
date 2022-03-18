import React from "react";

function NavBar({ cake, sum }) {
  return (
    <div>
      this is for the child :{cake}
      <h1>{sum(3, 5)}</h1>
    </div>
  );
}

export default NavBar;
