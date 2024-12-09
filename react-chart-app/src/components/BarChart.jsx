// Task 3: Implement Specific Chart Components

// Import React and the reusable ChartComponent
import React from "react";
import ChartComponent from "./chartcomponent";

const BarChart = ({ data }) => {
  // Prepare the chart data using props
  const chartData = {
    labels: data.months, // X-axis labels from the 'months' field in data
    datasets: [
      {
        label: "Monthly Sales", // Dataset label for the chart legend
        data: data.sales, // Y-axis data from the 'sales' field in data
        backgroundColor: "rgb(179, 158, 216)",
        borderColor: "rgb(179, 158, 216)", 
        borderWidth: 0.1, 
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

  // Render the bar chart using the reusable ChartComponent
  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
