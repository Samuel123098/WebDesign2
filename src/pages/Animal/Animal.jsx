import Navi from "../../components/HeaderSivenav.jsx";
import "./Animal.modual.css"
import AnimalCard from "../../components/AnimalCard.jsx";
import ThemeChanger from "../../components/ThemeChanger.jsx";

export default function Animal() {
    const BackgroundAnimal = getComputedStyle(document.documentElement).getPropertyValue("--BackgroundAnimal");
    document.body.style.background = BackgroundAnimal;
    document.body.style.backgroundSize = "200% 200%";
    document.body.style.animation = "gradient 15s ease infinite";


    return (
        <>        
            <Navi />
            <div className="Animals">
                <AnimalCard Imagename="https://i.imgur.com/CRCPHxy.jpeg" Animalname ="Ted" Ownername ="Sam (me)"/>
                <AnimalCard Imagename="https://i.imgur.com/iJBIJDa.jpeg" Animalname ="Bruce" Ownername ="Chloe"/>
                <AnimalCard Imagename="https://i.imgur.com/4pv7ndz.png" Animalname ="Loki" Ownername ="Orrin"/>
                <AnimalCard Imagename="https://i.imgur.com/NvgfWEe.png" Animalname ="Buddy" Ownername ="Tyler"/>
                <ThemeChanger />
            </div>

        </>
    );
}