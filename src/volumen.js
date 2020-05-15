import React from "react";

const Volumen = ({ companies, data, data2, title }) => {
  return (
    <div>
      <p>
        {title}
        {companies.reduce(
          (a, b) =>
            data[data2[a]]
              ? data[data2[a]].length >= 2
                ? data[data2[a]]
                    .map((elem) => elem[1])
                    .reduce((c, d) => c + d, 0)
                : data[data2[a]].map((elem) => elem[1])[0]
              : 0 + data[data2[b]]
              ? data[data2[b]].length >= 2
                ? data[data2[b]]
                    .map((elem) => elem[1])
                    .reduce((c, d) => c + d, 0)
                : data[data2[b]].map((elem) => elem[1])[0]
              : 0,
          0
        )}
      </p>
    </div>
  );
};

export default Volumen;
