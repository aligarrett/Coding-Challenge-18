import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs. Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: { title: { display: true, text: "Expenses" } },
      y: { title: { display: true, text: "Profits" } },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;