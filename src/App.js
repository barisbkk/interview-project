import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import data from "./helper/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      <main>{cards}</main>
    </div>
  );
}

export default App;
