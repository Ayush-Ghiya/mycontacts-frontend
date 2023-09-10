import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;



const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setIsDarkMode(true);
     
    } else {
      setTheme("light");
      setIsDarkMode(false);
      
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
   
    
  };

  
  return (
    <button
      className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={() => {
        setIsDarkMode(!isDarkMode);
        handleThemeSwitch();
      }}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-gray-700 translate-x-3/4"
            : "bg-yellow-500 -translate-x-2"
        } dark:bg-gray-700 w-7 h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white`}
      >
        {isDarkMode ? parse(darkIcon) : parse(lightIcon)}
      </div>
    </button>
  );
};

export default DarkModeSwitcher;
