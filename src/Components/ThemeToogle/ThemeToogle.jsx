import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className="h-12 w-12 flex items-center justify-center  cursor-pointer"
    >
      {theme === "light" ? (
        <div>
          <MdDarkMode size={35} />
        </div>
      ) : (
        <div>
          <CiLight size={35} color="yellow" />
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
