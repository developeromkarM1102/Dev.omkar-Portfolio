import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{

        const storedTheme = localStorage.getItem("theme");

        if(storedTheme === "dark"){
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        }
        else{      
        localStorage.setItem("theme","light");
        setIsDarkMode(false);
        
        }
    },[])
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    }

    return <button onClick={toggleTheme}
  className="fixed bottom-6 right-6 z-50 cursor-pointer p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 shadow-lg"
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-400" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900" />
  )}
</button>
}