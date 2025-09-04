import React from "react";

export default function Projects(props) {
  return (
    <section
      id="projects"
      className="scroll-mt-50 max-w-7xl mx-auto flex flex-col items-center my-55 px-4"
      style={{ color: props.color }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center lg:text-4xl">
        My Projects
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-25">
        {/* project-1 */}
        <div className="w-full lg:w-120 rounded-2xl overflow-hidden  shadow-md  hover:shadow-cyan-500/80 transition-all duration-300">
          {" "}
          {/*  border-cyan-500 border-2 */}
          <div className="overflow-hidden">
            <div
              style={{
                backgroundImage:
                  props.color === "black"
                    ? `url(/light-project-1.png)`
                    : `url(/dark-project-1.png)`,
              }}
              className=" bg-cover bg-top shadow-xl rounded-lg p-4
              w-full h-28 sm:h-40 md:h-48 lg:w-112 m-auto object-cover hover:scale-105 transition duration-500"
            ></div>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold mb-1">
              Portfolio Website
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">
              A modern, mobile-friendly Portfolio built with React and
              TailwindCSS.
            </p>
          </div>
        </div>

        {/* project-2 */}
        <div className="w-full lg:w-120 rounded-2xl overflow-hidden  shadow-md  hover:shadow-cyan-500/80 transition-all duration-300">
          <div className="overflow-hidden">
            <div
              style={{
                backgroundImage:
                  props.color === "black"
                    ? `url(/light-project-1.png)`
                    : `url(/dark-project-1.png)`,
              }}
              className="bg-cover bg-top shadow-xl rounded-lg p-4
              w-full h-28 sm:h-40 md:h-48 lg:w-112 m-auto object-cover hover:scale-105 transition duration-500"
            ></div>
          </div>
          <div className="p-3 sm:p-4 bg-transparent">
            <h3 className="text-sm sm:text-base lg:text-2xl md:text-lg font-semibold mb-1">
              Portfolio Website
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">
              A personal portfolio website showcasing projects, skills, and
              contact details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
