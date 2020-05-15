import React from "react";

const Variacion = ({ values }) => {
  return (
    <div>
      <p>
        Variación porcental:{" "}
        {(
          (values
            ? values.length >= 2
              ? (values[values.length - 1][1] - values[values.length - 2][1]) /
                values[values.length - 2][1]
              : 0
            : 0) * 100
        ).toFixed(5)}
        {"%"}
      </p>
    </div>
  );
};

export default Variacion;
