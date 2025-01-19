import Navi from "../components/HeaderSivenav.jsx";
import "./css/Animal.modual.css"

export default function Animal() {
     document.body.style.backgroundColor = "#191919"
    return (
        <>
            <Navi />
            <div className="Animals">
                <div className="Animalcolumn">
                    <img src="src/assets/pictures/Ted.jpeg" height={"auto"} width={"300px"} ></img>
                        <h1>Ted</h1>
                        <h2>Owner: Sam (me)</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="src/assets/pictures/Bruce.jpeg" height={"auto"} width={"300px"} ></img>
                        <h1>Bruce</h1>
                        <h2>Owner: Chloe</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="src/assets/pictures/Loki.png" height={"auto"} width={"300px"} ></img>
                        <h1>Loki</h1>
                        <h2>Owner: Orrin</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="src/assets/pictures/Buddy.png" height={"auto"} width={"300px"} ></img>
                        <h1>Buddy</h1>
                        <h2>Owner: Tyler</h2>
                </div>
            </div>

        </>
    );
}