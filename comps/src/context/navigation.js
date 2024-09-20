import { createContext, useState, useEffect } from "react";

const navigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  return (
    <navigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </navigationContext.Provider>
  );
}

export { NavigationProvider };
export default navigationContext;
