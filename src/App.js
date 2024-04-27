import "./App.css";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
