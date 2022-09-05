import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");
  const changeTheme = () => setTheme(theme == "light" ? "dark" : "light");
  useEffect(() => {
    if (theme == "light") {
      document.querySelector("html")?.classList.remove("dark");
    }
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
    return () => {};
  }, [theme]);

  return (
    <button
      className={`relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none ${
        theme == "light"
          ? "bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600"
          : "bg-slate-700 text-slate-400 focus-visible:ring-slate-500"
      }`}
      role="switch"
      type="button"
      tabIndex={0}
      aria-checked="true"
      onClick={changeTheme}
    >
      <span className="sr-only">
        {theme == "light" ? "Enable" : "Disable"} dark mode
      </span>
      <svg
        width="24"
        height="24"
        fill="none"
        aria-hidden="true"
        className={`transform transition-transform ${
          theme == "light" ? "scale-0 duration-500" : "scale-100 duration-300"
        }`}
      >
        <path
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        width="24"
        height="24"
        fill="none"
        aria-hidden="true"
        className={`ml-3.5 transform transition-transform ${
          theme == "light" ? "scale-100 duration-300" : "scale-0 duration-500"
        }`}
      >
        <path
          d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <span
        className={`absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform ${
          theme == "light" ? "" : "translate-x-[2.625rem]"
        }`}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className={`flex-none transition duration-500 transform text-cyan-500 ${
            theme == "light" ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className={`lex-none -ml-6 transition duration-500 transform text-slate-700 ${
            theme == "light" ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        >
          <path
            d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default ThemeSwitch;
