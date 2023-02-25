import data from "./data/data.json";
import Result from "./components/result";
import Summary from "./components/summary";

function App() {
  const scores = data.map((item) => item.score);
  const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  return (
    <main className="card">
      <h1 className="sr-only">Results summary component</h1>
      <Result averageScore={averageScore} />
      <Summary data={data} />
    </main>
  );
}

export default App;
