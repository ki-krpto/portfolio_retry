import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => {
    const start = document.startViewTransition
      ? document.startViewTransition.bind(document)
      : (cb) => cb();

    start(() => {
      // this is where the theme actually flips
      setDark((prev) => !prev);
    });
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "transparent",
        color: "#9d4dff",
        fontSize: "18px",
        cursor: "pointer",
        marginLeft: "1rem",
      }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
