// Task 3: Implement Specific Chart Components

// Import React and the reusable ChartComponent
import React from "react";
import ChartComponent from "./chartcomponent";

const BubbleChart = ({ data }) => {
  // Prepare the chart data by mapping expenses, profits, and sales to the dataset
  const chartData = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: data.expenses.map((expense, index) => ({
          x: expense, // X-axis value from 'expenses' array
          y: data.profits[index], // Y-axis value from 'profits' array
          r: data.sales[index] / 100, // Bubble size scaled down by dividing sales by 100
        })),
        backgroundColor: "pink", // Bubble fill color
        borderColor: "pink", // Border color of the bubbles
        borderWidth: 1, // Thickness of bubble borders
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true, // Make the chart adapt to screen size
    plugins: {
      legend: { display: true }, // Enable legend display
    },
    scales: {
      x: { title: { display: true, text: "Expenses" } }, // X-axis title
      y: { title: { display: true, text: "Profits" } }, // Y-axis title
    },
  };

  // Render the bubble chart using the reusable ChartComponent
  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
