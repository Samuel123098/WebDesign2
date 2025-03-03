import React from "react"; 

export function Gettheme(){
    let ThemeSetting = localStorage.getItem("Theme");
    if (ThemeSetting === null) {
        document.documentElement.style.setProperty("--BackgroundAnimal", "Green");
    }   else if (ThemeSetting === "1") {
        document.documentElement.style.setProperty("--BackgroundAnimal", "Red");
    } else if (ThemeSetting === "2") {
        document.documentElement.style.setProperty("--BackgroundAnimal", "Blue");
    }
}
export default function ThemeChanger() {
    function Settheme(Number){
        localStorage.setItem("Theme", Number);
        window.location.reload();
    }
    return (
        <>
            <button onClick={()=>Settheme("1")}>Theme1</button>
            <button onClick={()=>Settheme("2")}>Theme2</button>
        </>
    );
}