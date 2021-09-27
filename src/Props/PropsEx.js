// Nhanh con cap 1
// function PropsEx(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.description}</h2>
//       <h3>${props.price}</h3>
//       <h4>-------------------------------------------------</h4>
//     </div>
//   );
// }

// export default PropsEx;

import React from "react";
import conPropFC from "./conPropFC";
import conPropCL from "./conPropCL";

//Nhanh con cap 2
function PropsEx({ name, description, price }) {
  return (
    <div>
      <conPropFC name={name} description={description} />
      <conPropCL name={name} description={description} />
      <h3>${price}</h3>
      <h4>-------------------------------------------------</h4>
    </div>
  );
}

export default PropsEx;
