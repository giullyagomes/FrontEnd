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
  const [faceDado, setFaceDado] = useState(1);

  function rolarDado() {
    setFaceDado(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Jogue o dado!</h1>
      <Dado valor={faceDado} />
      <button onClick={rolarDado} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Gerar Face
      </button>
    </div>
  );
}
