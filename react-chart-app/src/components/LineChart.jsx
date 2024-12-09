// Task 3: Implement Specific Chart Components

// Import React and the reusable ChartComponent
import React from "react";
import ChartComponent from "./chartcomponent";

const LineChart = ({ data }) => {
  // Prepare the chart data using props
  const chartData = {
    labels: data.months, // X-axis labels from the 'months' field in data
    datasets: [
      {
        label: "Monthly Profits", // Dataset label for the chart legend
        data: data.profits, // Y-axis data from the 'profits' field in data
        fill: false, 
        borderColor: "rgb(249, 187, 208)", // Line color for the chart
        tension: 0.1, // Smooth out line curves
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true, // Make the chart adapt to screen size
    plugins: {
      legend: { display: true }, // Enable legend display
    },
  };

  // Render the line chart using the reusable ChartComponent
  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;