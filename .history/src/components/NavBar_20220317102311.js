import React from "react";

function NavBar(props) {
  return (
    <div>
      this is for the child :{props.cake}
      <h1>{props.sum(3, 5)}</h1>
    </div>
  );
}

export default NavBar;
