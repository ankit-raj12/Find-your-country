import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export function useTheme(){
    
    const [isDark,setIsDark] = useContext(themeContext)
    return [isDark,setIsDark]
}