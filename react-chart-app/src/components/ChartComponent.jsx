// Task 2: Create the Reusable ChartComponent

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  // Create a reference to the canvas DOM element
  const chartRef = useRef(null);

  // Store the Chart.js instance to manage updates and destruction
  const chartInstanceRef = useRef(null);

  // Effect for initializing the chart
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d'); // Get the 2D rendering context
      // Create a new Chart.js instance with the provided configuration
      chartInstanceRef.current = new Chart(ctx, {
        type, // Chart type (e.g., 'bar', 'line', 'scatter', etc.)
        data, // Data for the chart
        options, // Configuration options for the chart
      });
    }

    return () => {
      // Cleanup: Destroy the chart instance when the component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [type, data, options]); // Dependency array ensures this effect runs when props change

  // Effect for updating the chart when data or options change
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data = data; // Update chart data
      chartInstanceRef.current.options = options; // Update chart options
      chartInstanceRef.current.update(); // Re-render the chart
    }
  }, [data, options]); // Dependency array for reactivity

  // Render a canvas element where the chart will be drawn
  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;