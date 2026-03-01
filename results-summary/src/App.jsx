import { data, Result, Summary } from "./components";

function App() {
  const averageScore =
    data.reduce((acc, item) => acc + item.score, 0) / data.length;
  return (
    <main className="card">
      <h1 className="sr-only">Results summary component</h1>
      <Result averageScore={averageScore} />
      <Summary data={data} />
    </main>
  );
}

export default App;
