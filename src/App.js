import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const newData = data.map((item) => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    );
  });

  return (
    <div className="main--container">
      <Navbar />
      <Hero />
      <section className="card--list">{newData}</section>
    </div>
  );
}
