import Navi from "../../components/HeaderSivenav.jsx";
import "./ComputLan.modual.css"

export default function ComputLan() {
    return (
        <>
            <Navi />
            <h>Computerlan page</h>
            <div className="computlan">
                <div className="welcome"> 
                    <h1>Test</h1>
                </div>


                <div className="python">

                        <div className = "Box1">
                            <h1><b>Python.</b></h1>
                        </div>
                        <div className = "Box2">
                            <p className="PythonDescr"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum, mauris et efficitur ornare, metus mauris dapibus metus, a lacinia elit velit sed magna. Nunc nibh elit, volutpat sit amet mollis at, sagittis quis risus. In at mauris sem. Proin volutpat auctor urna, non hendrerit ex lacinia ac. Mauris congue varius magna. Suspendisse commodo, justo ac consequat vehicula, ligula tortor sagittis velit, et ornare nisl velit sed eros. Pellentesque in dignissim tellus. In non lorem at libero mollis placerat. Nulla in dapibus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean imperdiet lectus a bibendum tincidunt. Cras laoreet turpis mattis, venenatis purus a, molestie purus.</b></p>
                        </div>
                        <img src="/Python-logo-notext.svg.png" alt="Python" className="PythonLogo"/>

                    <button className="Button1"></button>
                    <button className="Button2"></button>
                </div>


                <div className="Htmlcss">
                    <h1>
                        html+css
                    </h1>
                </div>
            </div>
        </>
    );
}