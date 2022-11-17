import { useContext, useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext("light");

const themeRducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      const theme = action.payload;
      return { theme };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeRducer, { theme: "light" });

  console.log(state);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
