import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";

export default function Header() {
  const [isDark,setisDark] = useTheme()

    useEffect(() => {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const container = document.querySelector('.container');
    const svg = document.querySelector('nav button svg');
    const searchSVG = document.querySelector('.search .searchIcon svg')
    
    console.log(searchSVG)
    if (isDark) {
      nav?.classList.add('dark');
      main?.classList.add('dark');
      container?.classList.add('dark');
      if (svg) svg.style.fill = 'white';
      if (searchSVG) searchSVG.style.fill = 'white';
    } else {
      nav?.classList.remove('dark');
      main?.classList.remove('dark');
      container?.classList.remove('dark');
      if (svg) svg.style.fill = 'black';
      if (searchSVG) searchSVG.style.fill = 'black';
    }
  }, [isDark]); 

  return (
    <nav className={`${isDark ? 'dark' : ''}`}>
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>
      <button onClick={() => {
        setisDark(!isDark)
        localStorage.setItem('isDarkMode' , !isDark)
        
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
        </svg>
        <p>Light Mode</p>
      </button>
    </nav>
  );
}
