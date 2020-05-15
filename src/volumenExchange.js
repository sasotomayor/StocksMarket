import React from "react";

const VolumenExchange = ({
  companies,
  buydata,
  selldata,
  stockdata,
  title,
}) => {
  return (
    <div>
      <p>
        {title}
        {companies.reduce(
          (a, b) =>
            buydata[stockdata[a]]
              ? buydata[stockdata[a]].length >= 2
                ? buydata[stockdata[a]]
                    .map((elem) => elem[1])
                    .reduce((c, d) => c + d, 0)
                : buydata[stockdata[a]].map((elem) => elem[1])[0]
              : 0 + buydata[stockdata[b]]
              ? buydata[stockdata[b]].length >= 2
                ? buydata[stockdata[b]]
                    .map((elem) => elem[1])
                    .reduce((c, d) => c + d, 0)
                : buydata[stockdata[b]].map((elem) => elem[1])[0]
              : 0,
          0
        ) +
          companies.reduce(
            (a, b) =>
              selldata[stockdata[a]]
                ? selldata[stockdata[a]].length >= 2
                  ? selldata[stockdata[a]]
                      .map((elem) => elem[1])
                      .reduce((c, d) => c + d, 0)
                  : selldata[stockdata[a]].map((elem) => elem[1])[0]
                : 0 + selldata[stockdata[b]]
                ? selldata[stockdata[b]].length >= 2
                  ? selldata[stockdata[b]]
                      .map((elem) => elem[1])
                      .reduce((c, d) => c + d, 0)
                  : selldata[stockdata[b]].map((elem) => elem[1])[0]
                : 0,
            0
          )}
      </p>
    </div>
  );
};

export default VolumenExchange;
