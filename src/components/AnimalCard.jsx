import React from 'react';

export default function AnimalCard(props){
    const ImgSrrc = props.Imagename;
    const Animalname = props.Animalname;
    const Ownername = props.Ownername;
return(
    <div className="Animalcolumn">
        <img src = {ImgSrrc}  height={"auto"} width={"300px"} ></img>
        <h1>{Animalname}</h1>
        <h2>Owner: {Ownername} </h2>
    </div>
    );
}