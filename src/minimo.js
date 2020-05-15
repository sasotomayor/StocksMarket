import React from "react";

const Minimo = ({ values }) => {
  return (
    <div>
      <p>Mínimo: {values ? Math.min(...values.map((elem) => elem[1])) : 0}</p>
    </div>
  );
};

export default Minimo;
