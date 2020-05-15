import React from "react";

const Participacion = ({
  exchanges,
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
        {(
          (companies.reduce(
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
            )) /
          exchanges.reduce(
            (a, b) =>
              a.listed_companies.reduce(
                (e, f) =>
                  buydata[stockdata[e]]
                    ? buydata[stockdata[e]].length >= 2
                      ? buydata[stockdata[e]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : buydata[stockdata[e]].map((elem) => elem[1])[0]
                    : 0 + buydata[stockdata[f]]
                    ? buydata[stockdata[f]].length >= 2
                      ? buydata[stockdata[f]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : buydata[stockdata[f]].map((elem) => elem[1])[0]
                    : 0,
                0
              ) +
              a.listed_companies.reduce(
                (e, f) =>
                  selldata[stockdata[e]]
                    ? selldata[stockdata[e]].length >= 2
                      ? selldata[stockdata[e]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : selldata[stockdata[e]].map((elem) => elem[1])[0]
                    : 0 + selldata[stockdata[f]]
                    ? selldata[stockdata[f]].length >= 2
                      ? selldata[stockdata[f]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : selldata[stockdata[f]].map((elem) => elem[1])[0]
                    : 0,
                0
              ) +
              (b.listed_companies.reduce(
                (e, f) =>
                  buydata[stockdata[e]]
                    ? buydata[stockdata[e]].length >= 2
                      ? buydata[stockdata[e]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : buydata[stockdata[e]].map((elem) => elem[1])[0]
                    : 0 + buydata[stockdata[f]]
                    ? buydata[stockdata[f]].length >= 2
                      ? buydata[stockdata[f]]
                          .map((elem) => elem[1])
                          .reduce((c, d) => c + d, 0)
                      : buydata[stockdata[f]].map((elem) => elem[1])[0]
                    : 0,
                0
              ) +
                b.listed_companies.reduce(
                  (e, f) =>
                    selldata[stockdata[e]]
                      ? selldata[stockdata[e]].length >= 2
                        ? selldata[stockdata[e]]
                            .map((elem) => elem[1])
                            .reduce((c, d) => c + d, 0)
                        : selldata[stockdata[e]].map((elem) => elem[1])[0]
                      : 0 + selldata[stockdata[f]]
                      ? selldata[stockdata[f]].length >= 2
                        ? selldata[stockdata[f]]
                            .map((elem) => elem[1])
                            .reduce((c, d) => c + d, 0)
                        : selldata[stockdata[f]].map((elem) => elem[1])[0]
                      : 0,
                  0
                ))
          )
        ).toFixed(5)}
      </p>
    </div>
  );
};

export default Participacion;
