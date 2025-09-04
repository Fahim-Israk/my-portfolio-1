import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    changeColor();
    changeButtonColor();
  };

  // change color
  const [color, setColor] = useState("black");
  const changeColor = () => {
    setColor(color === "black" ? "white" : "black");
  };

  const [buttonColor, setButtonColor] = useState(
    `text-black bg-cyan-400 hover:bg-transparent`
  );
  const changeButtonColor = () => {
    setButtonColor(
      buttonColor === "text-black bg-cyan-400 hover:bg-transparent"
        ? "text-cyan-400 hover:bg-cyan-400"
        : "text-black bg-cyan-400 hover:bg-transparent"
    );
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(/${mode}-bg.png)` }}
        className={` h-full w-full bg-cover bg-top`}
      >
        <Navbar toggleMode={toggleMode} color={color} />

        {/* <button className=" text-blue-600 mt-20" onClick={toggleMode}>
          Click me
        </button> */}

        <Hero color={color} buttonColor={buttonColor} />

        <About color={color} />

        <Projects color={color} />

        <Contact color={color} />
      </div>
    </>
  );
}

export default App;
