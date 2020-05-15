import React from "react";

const Maximo = ({ values }) => {
  return (
    <div>
      <p>Máximo: {values ? Math.max(...values.map((elem) => elem[1])) : 0}</p>
    </div>
  );
};

export default Maximo;
