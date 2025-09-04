import React from "react";

const About = (props) => {
  return (
    <div
      id="about"
      style={{ color: props.color }}
      className=" scroll-mt-50 lg:mt-55 md:mt-35 mt-30 flex items-center justify-center bg-gradient-to-r"
    >
      <div
        className={`max-w-7xl w-full bg-opacity-80 rounded-lg flex flex-col md:flex-row items-center  px-6 py-8`}
      >
        {/* Left Side - Profile Image */}
        <div className="flex justify-center items-center w-full md:w-1/3">
          <img
            className="rounded-full border-4 border-cyan-400 w-40 h-40 md:w-56 md:h-56 shadow-lg"
            src="your-image-url" // Replace with your image source
            // alt="Fahim Husain"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left md:w-2/3 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-semibold">ABOUT</h2>
          <p className="mt-4 text-lg md:text-xl">
            I'm Fahim Husain, a web developer and AI creator who builds visually
            engaging and intelligent websites. I have a strong passion for
            coding and AI, and I’m dedicated to staying at the forefront of the
            latest technological advancements.
          </p>

          {/* Tech Stack */}
          <h2 className="mt-10 text-2xl font-semibold">TECH STACK</h2>
          <div className="mt-4 flex justify-center md:justify-start gap-10 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/reactLogo.png" // Replace with React icon path
                // alt="React"
                className="w-10 h-10"
              />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/jsLogo.png" // Replace with JavaScript icon path
                // alt="Javascript"
                className="w-10 h-10"
              />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/pyLogo.png" // Replace with Python icon path
                // alt="Python"
                className="w-10 h-10"
              />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/tailwindLogo.png" // Replace with AI icon path
                // alt="AI"
                className="w-10 h-10"
              />
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
