"use client";

import { useState } from "react";

const imagensDados = {
  1: "/face1.png",
  2: "/face2.png",
  3: "/face3.png",
  4: "/face4.png",
  5: "/face5.png",
  6: "/face6.png",
};

function Dado({ valor }) {
  return <img src={imagensDados[valor]} alt={`Dado ${valor}`} width={100} height={100} />;
}

export default function Home() {
  const [numeroJogador1, setNumeroJogador1] = useState(1);
  const [numeroJogador2, setNumeroJogador2] = useState(1);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [rodada, setRodada] = useState(1);
  const [mensagem, setMensagem] = useState("");

  function rolarDadoJogador1() {
    setNumeroJogador1(Math.floor(Math.random() * 6) + 1);
  }

  function rolarDadoJogador2() {
    setNumeroJogador2(Math.floor(Math.random() * 6) + 1);
  }

  function finalizarRodada() {
    if (numeroJogador1 > numeroJogador2) {
      setVitoriasJogador1(vitoriasJogador1 + 1);
    } else if (numeroJogador2 > numeroJogador1) {
      setVitoriasJogador2(vitoriasJogador2 + 1);
    }

    if (rodada < 5) {
      setRodada(rodada + 1);
    } else {
      if (vitoriasJogador1 > vitoriasJogador2) {
        setMensagem("Jogador 1 venceu o jogo!");
      } else if (vitoriasJogador2 > vitoriasJogador1) {
        setMensagem("Jogador 2 venceu o jogo!");
      } else {
        setMensagem("Empate!");
      }
    }
  }

  function resetarJogo() {
    setNumeroJogador1(1);
    setNumeroJogador2(1);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setRodada(1);
    setMensagem("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Jogo de Dados</h1>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <h2>Jogador 1</h2>
          <Dado valor={numeroJogador1} />
          <button onClick={rolarDadoJogador1} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Rolar Dado</button>
        </div>
        <div className="flex flex-col items-center">
          <h2>Jogador 2</h2>
          <Dado valor={numeroJogador2} />
          <button onClick={rolarDadoJogador2} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Rolar Dado</button>
        </div>
      </div>
      <button onClick={finalizarRodada} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Finalizar Rodada</button>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">Placar:</p>
        <p>Jogador 1: {vitoriasJogador1} vitórias</p>
        <p>Jogador 2: {vitoriasJogador2} vitórias</p>
      </div>
      {mensagem && (
        <div className="text-xl font-bold mt-4">
          <p>{mensagem}</p>
          <button onClick={resetarJogo} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 mt-2">Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}