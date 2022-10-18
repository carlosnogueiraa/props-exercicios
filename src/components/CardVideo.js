import React from "react";
import { InfosUsuario } from "./InfosUsuario";


export function CardVideo(props) {

    const infoUsuario = {
        usuario: "Carlos Nogueira",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
    return (
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img className="imgPaisagem" src={props.infoVideo.img} alt="" />
                <h4>{props.infoVideo.titulo}</h4>
                <InfosUsuario infoUsuario={infoUsuario}/>
            </div>        
    )
}