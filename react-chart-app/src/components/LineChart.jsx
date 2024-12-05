import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Profits",
        data: data.profits,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;