import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { themeContext } from "./context/ThemeContext";

function App() {

    const [isDark,setisDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    
    
  return (
    <themeContext.Provider value={[isDark,setisDark]}>
      <Header />
      <Outlet />
    </themeContext.Provider>
  );
}

export default App;
