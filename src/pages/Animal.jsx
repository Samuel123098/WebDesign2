import Navi from "../components/HeaderSivenav.jsx";
import "./css/Animal.modual.css"

export default function Animal() {
     document.body.style.backgroundColor = "#191919"
    return (
        <>
            <Navi />
            <div className="Animals">
                <div className="Animalcolumn">
                    <img src="https://i.imgur.com/CRCPHxy.jpeg" height={"auto"} width={"300px"} ></img>
                        <h1>Ted</h1>
                        <h2>Owner: Sam (me)</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://i.imgur.com/iJBIJDa.jpeg" height={"auto"} width={"300px"} ></img>
                        <h1>Bruce</h1>
                        <h2>Owner: Chloe</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://i.imgur.com/4pv7ndz.png" height={"auto"} width={"300px"} ></img>
                        <h1>Loki</h1>
                        <h2>Owner: Orrin</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://i.imgur.com/NvgfWEe.png" height={"auto-100px"} width={"300px"} ></img>
                        <h1>Buddy</h1>
                        <h2>Owner: Tyler</h2>
                </div>
            </div>

        </>
    );
}