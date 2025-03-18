"use client";

import { useState } from "react";

function Dado({ valor }) {
  return <img src={`/face${valor}.png`} alt={`Dado ${valor}`} width={100} height={100} />;
}

export default function JogoDeDados() {
  const [rodada, setRodada] = useState(1);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function jogarRodada() {
    if (rodada > 5) return;

    const novoDado1 = Math.floor(Math.random() * 6) + 1;
    const novoDado2 = Math.floor(Math.random() * 6) + 1;

    setDadoJogador1(novoDado1);
    setDadoJogador2(novoDado2);

    if (novoDado1 > novoDado2) setVitoriasJogador1(vitoriasJogador1 + 1);
    else if (novoDado2 > novoDado1) setVitoriasJogador2(vitoriasJogador2 + 1);

    if (rodada === 5) setJogoFinalizado(true);
    setRodada(rodada + 1);
  }

  function resetarJogo() {
    setRodada(1);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setJogoFinalizado(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Jogo de Dados</h1>
      <p className="text-lg">Rodada {rodada > 5 ? 5 : rodada} de 5</p>
      <div className="flex gap-8">
        <div className="text-center">
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <p>Vitórias: {vitoriasJogador1}</p>
        </div>
        <div className="text-center">
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <p>Vitórias: {vitoriasJogador2}</p>
        </div>
      </div>
      {jogoFinalizado ? (
        <>
          <h2 className="text-xl font-bold">
            {vitoriasJogador1 > vitoriasJogador2
              ? "Jogador 1 venceu!"
              : vitoriasJogador2 > vitoriasJogador1
              ? "Jogador 2 venceu!"
              : "Empate!"}
          </h2>
          <button
            onClick={resetarJogo}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          >
            Jogar Novamente
          </button>
        </>
      ) : (
        <button
          onClick={jogarRodada}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Jogar Rodada
        </button>
      )}
    </div>
  );
}