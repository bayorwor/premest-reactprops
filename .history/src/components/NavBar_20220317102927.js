import React from "react";

function NavBar({ cake, sum, header }) {
  return (
    <div>
      this is for the child :{cake}
      <h1>{sum(3, 5)}</h1>
      <h3>{header}</h3>
    </div>
  );
}

export default NavBar;
