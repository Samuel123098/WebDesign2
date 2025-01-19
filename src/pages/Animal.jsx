import Navi from "../components/HeaderSivenav.jsx";
import "./css/Animal.modual.css"

export default function Animal() {
     document.body.style.backgroundColor = "#191919"
    return (
        <>
            <Navi />
            <div className="Animals">
                <div className="Animalcolumn">
                    <img src="https://cdn.discordapp.com/attachments/887716588080468001/1330352799719886928/Ted.jpeg?ex=678dab18&is=678c5998&hm=c896dcac201dc2dc2a8a5879d9c143200ebb6b52c81422b1f4522194d61b111a&" height={"auto"} width={"300px"} ></img>
                        <h1>Ted</h1>
                        <h2>Owner: Sam (me)</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://cdn.discordapp.com/attachments/887716588080468001/1330352798507729008/Bruce.jpeg?ex=678dab17&is=678c5997&hm=4474c62ee70a6e6ec49fc745eaf19868a6bd84c5cd09b4a4868862b037ce74d4&" height={"auto"} width={"300px"} ></img>
                        <h1>Bruce</h1>
                        <h2>Owner: Chloe</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://cdn.discordapp.com/attachments/887716588080468001/1330352799212638238/Loki.png?ex=678dab18&is=678c5998&hm=ec1c64906f02c85ac3c3b3fc9416a430969fb651cf77efe4d90cba9cc79f7efd&" height={"auto"} width={"300px"} ></img>
                        <h1>Loki</h1>
                        <h2>Owner: Orrin</h2>
                </div>
                <div className="Animalcolumn">
                    <img src="https://cdn.discordapp.com/attachments/887716588080468001/1330352798843408424/Buddy.png?ex=678dab18&is=678c5998&hm=0f8b3e8be579dcb79b14a8c23b1f49ce4d67942af35967d918fbd465334f1566&" height={"auto-100px"} width={"300px"} ></img>
                        <h1>Buddy</h1>
                        <h2>Owner: Tyler</h2>
                </div>
            </div>

        </>
    );
}