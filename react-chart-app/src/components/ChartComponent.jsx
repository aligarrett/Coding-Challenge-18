import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartComponent = ({ type = "bar", data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Initialize the Chart
    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      // Cleanup the chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [type, data, options]);

  useEffect(() => {
    // Update chart data and options dynamically
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data = data;
      chartInstanceRef.current.options = options;
      chartInstanceRef.current.update();
    }
  }, [data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;