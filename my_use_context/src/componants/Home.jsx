import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    height: "100vh",
    padding: "40px",
    transition: "0.4s",
  };

  return (
    <div style={style}>
      <h1>Theme: {theme.toUpperCase()}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Home;