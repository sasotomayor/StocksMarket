import React from "react";
import Chart from "react-google-charts";

const Grafico = ({ data, chartName }) => {
  return (
    <Chart
      width={400}
      height={300}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      options={{ title: chartName }}
      data={[
        [
          { type: "date", label: "x" },
          { type: "number", label: "values" },
        ],
        ...data,
      ]}
    />
  );
};

export default Grafico;
