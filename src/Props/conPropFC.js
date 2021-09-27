import React from "react";

function conPropFC({ name, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default conPropFC;
