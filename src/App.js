import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}

export default App;
