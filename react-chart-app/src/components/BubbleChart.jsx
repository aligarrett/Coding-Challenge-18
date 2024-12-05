import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 100, // Scale bubble size
        })),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
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

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;