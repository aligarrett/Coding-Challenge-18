// Task 3: Implement Specific Chart Components

// Import React and the reusable ChartComponent
import React from "react";
import ChartComponent from "./chartcomponent";

const ScatterChart = ({ data }) => {
  // Prepare the chart data by mapping expenses to profits
  const chartData = {
    datasets: [
      {
        label: "Expenses vs. Profits", // Dataset label for the chart legend
        data: data.expenses.map((expense, index) => ({
          x: expense, // X-axis value from 'expenses' array
          y: data.profits[index], // Corresponding Y-axis value from 'profits' array
        })),
        backgroundColor: "rgb(180, 159, 217)", // Dot color
        borderColor: "rgb(180, 159, 217)", // Border color of dots
        borderWidth: 1, // Thickness of dot borders
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

  // Render the scatter chart using the reusable ChartComponent
  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;