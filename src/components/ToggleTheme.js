import React from "react";
import { ThemeConsumer } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
