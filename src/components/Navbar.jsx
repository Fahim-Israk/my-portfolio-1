import React, { useState } from "react";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleCheckBox = () => {
    setEnabled(!enabled);
    props.toggleMode();
  };
  return (
    <nav
      style={{
        color: props.color,
        backgroundColor: props.color === "black" ? "white" : "transparent",
      }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-5 shadow-xl z-50 bg-transparent"
    >
      {/* Logo */}
      <div className="text-2xl mr-3 font-bold">MyWebsite</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex text-xl gap-7">
        <li>
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">
        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          {/* Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              onChange={handleCheckBox}
            />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 
                        after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                        after:bg-white after:border-gray-300 after:border after:rounded-full 
                        after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"
            ></div>
          </label>

          {/* Label */}
          <span className="font-medium">
            {enabled ? "DarkMode ON" : "DarkMode OFF"}
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg"
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul
            style={{
              backgroundColor:
                props.color === "black"
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgba(0, 0, 0, 0.9)",
              color: props.color === "black" ? "black" : "white",
            }}
            className="absolute top-12 right-0 w-48 text-xl flex flex-col items-center gap-4 py-4 shadow-md md:hidden z-40"
          >
            <li>
              <a href="#home" className="block font-bold hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block font-semibold hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block font-semibold hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
