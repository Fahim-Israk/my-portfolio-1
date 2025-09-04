import React from "react";

function Hero(props) {
  return (
    <div
      id="home"
      style={{ color: props.color }}
      className=" flex flex-col items-center gap-7 lg:pt-55 md:pt-32 pt-50 text-center"
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold">
        FAHIM HUSAIN
      </h1>
      <h3 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold">
        Web Developer & Designer
      </h3>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-9 text-lg md:text-2xl">
        <li className="list-disc">Web Developer</li>
        <li className="list-disc">React Developer</li>
        <li className="list-disc">Frontend Dev</li>
        <li className="list-disc">CSS Enthusiast</li>
      </ul>
      <a href="#projects">
        <button
          href="#projects"
          onClick={props.toggleMode}
          className={`mt-5
      px-6 md:px-9 py-3 md:py-4
      text-lg md:text-2xl lg:text-3xl
      ${props.buttonColor} font-semibold 
      border-2 border-cyan-400
      rounded-full
      
      shadow-[0_0_10px_rgba(0,224,255,0.4)]
      transition-all duration-300
       hover:text-black
       
      hover:shadow-[0_0_20px_rgba(0,224,255,0.8)]
      cursor-pointer
      `}
        >
          VIEW PROJECTS
        </button>
      </a>
    </div>
  );
}

export default Hero;
