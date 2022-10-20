import React from "react";
import "../styles.css";

export function InfosUsuario(props) {

    return(
        <div className="autorContainer">
            <img className="autor" src={props.infoUsuario.img} alt=""></img>
            <p>{props.infoUsuario.usuario}</p>
        </div>
    )
}