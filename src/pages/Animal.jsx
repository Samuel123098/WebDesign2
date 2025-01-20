import Navi from "../components/HeaderSivenav.jsx";
import "./css/Animal.modual.css"
import AnimalCard from "../components/AnimalCard.jsx";

export default function Animal() {
     document.body.style.backgroundColor = "#191919"

    return (
        <>
            <Navi />
            <div className="Animals">
                <AnimalCard Imagename="https://i.imgur.com/CRCPHxy.jpeg" Animalname ="Ted" Ownername ="Sam (me)"/>
                <AnimalCard Imagename="https://i.imgur.com/iJBIJDa.jpeg" Animalname ="Bruce" Ownername ="Chloe"/>
                <AnimalCard Imagename="https://i.imgur.com/4pv7ndz.png" Animalname ="Loki" Ownername ="Orrin"/>
                <AnimalCard Imagename="https://i.imgur.com/NvgfWEe.png" Animalname ="Buddy" Ownername ="Tyler"/>
            </div>

        </>
    );
}