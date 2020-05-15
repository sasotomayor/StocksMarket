import React from "react";

const Ultimo = ({ values }) => {
  return (
    <div>
      <p>Último valor: {values ? values[values.length - 1][1] : 0}</p>
    </div>
  );
};

export default Ultimo;
