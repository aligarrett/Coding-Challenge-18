// Task 4 and 5: Fetch Data for Charts and Render Charts in the App

// Import necessary hooks and components
import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  // State to store fetched chart data
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data asynchronously from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("/financial_data.json"); // Fetch the JSON data
        const data = await response.json(); // Parse the response as JSON
        setChartData(data); // Update the chart data state
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchData(); // Invoke the fetch function on component mount
  }, []);

  // Display a loading message until the data is fetched
  if (!chartData) {
    return <div>Loading data, please wait...</div>;
  }

  // Render the charts with their respective titles
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Charts with React and Chart.js</h1>

      {/* Bar chart for monthly sales */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Bar Chart for Monthly Sales</h2>
        <BarChart data={chartData} />
      </section>

      {/* Line chart for monthly profits */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Line Chart for Monthly Profits</h2>
        <LineChart data={chartData} />
      </section>

      {/* Scatter chart for expenses vs. profits */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Scatter Chart for Expenses vs. Profits</h2>
        <ScatterChart data={chartData} />
      </section>

      {/* Bubble chart for combined metrics */}
      <section>
        <h2>Bubble Chart for Combined Metrics</h2>
        <BubbleChart data={chartData} />
      </section>
    </div>
  );
};

export default App;