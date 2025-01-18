import Navi from "../components/HeaderSivenav.jsx";
import "./css/Animal.modual.css"

export default function Animal() {
    const styles = {
        main: {
          backgroundColor: "#000000",
          width: "100%",
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };
    return (
        <>
            <div className="main" style={styles.main}></div>
            <Navi />
            <h1>Animal</h1>
            <div className="main" style={styles.main}></div>
        </>
    );
}