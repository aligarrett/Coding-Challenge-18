// Task 4: Fetch Data for Charts

import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setChartData(data);
    };

    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Financial Data Charts</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;