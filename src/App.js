import React from "react";
import "./styles.css";
import { CardVideo } from "./components/CardVideo";

export default function App() {
  const titulo = "Título do vídeo";

  const infoVideo = [
  {
    titulo: titulo,
    img: "https://picsum.photos/400/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/410/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/420/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/430/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/440/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/450/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/460/400?a=1"
  },

  {
    titulo: titulo,
    img: "https://picsum.photos/470/400?a=1"
  }
]

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo infoVideo={infoVideo[0]}/>
            <CardVideo infoVideo={infoVideo[1]}/>
            <CardVideo infoVideo={infoVideo[2]}/>
            <CardVideo infoVideo={infoVideo[3]}/>
            <CardVideo infoVideo={infoVideo[4]}/>
            <CardVideo infoVideo={infoVideo[5]}/>
            <CardVideo infoVideo={infoVideo[6]}/>
            <CardVideo infoVideo={infoVideo[7]}/>

          </section>

        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
