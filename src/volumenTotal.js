import React from "react";

const VolumenTotal = ({ buy, sell }) => {
  return (
    <div>
      <p>
        Volumen total transado:{" "}
        {buy
          ? buy.length >= 2
            ? buy.map((elem) => elem[1]).reduce((a, b) => a + b, 0)
            : buy.map((elem) => elem[1])[0]
          : 0 + sell
          ? sell.length >= 2
            ? sell.map((elem) => elem[1]).reduce((a, b) => a + b, 0)
            : sell.map((elem) => elem[1])[0]
          : 0}
      </p>
    </div>
  );
};

export default VolumenTotal;
