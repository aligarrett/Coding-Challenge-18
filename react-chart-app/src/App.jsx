// Task 4 & 5: Fetch Data for Charts & Render Charts in the App

import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Ensure this matches your public folder structure
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading data, please wait...</div>; // Loading message
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Financial Data Visualization</h1>
      
      <section style={{ marginBottom: "40px" }}>
        <h2>Bar Chart: Monthly Sales</h2>
        <BarChart data={chartData} />
      </section>
      
      <section style={{ marginBottom: "40px" }}>
        <h2>Line Chart: Monthly Profits</h2>
        <LineChart data={chartData} />
      </section>
      
      <section style={{ marginBottom: "40px" }}>
        <h2>Scatter Chart: Expenses vs. Profits</h2>
        <ScatterChart data={chartData} />
      </section>
      
      <section>
        <h2>Bubble Chart: Combined Metrics</h2>
        <BubbleChart data={chartData} />
      </section>
    </div>
  );
};

export default App;