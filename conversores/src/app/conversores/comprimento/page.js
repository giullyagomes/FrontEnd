"use client"

import { useState } from "react";

export default function Comprimento() {
    const valorDeUmaPolegada = 39.37;
    const valordeUmPe = 3.28084;
    
    const [comprimentoEmMetros, setComprimentoEmMetros] = useState(0);
    const [comprimentoEmPolegadas, setComprimentoEmPolegadas] = useState(0);
    const [comprimentoEmPes, setComprimentoEmPes] = useState(0);

    const converterValor = (nomeDoCampo, valor) => {
        if (nomeDoCampo === "metros") {
            setComprimentoEmMetros(valor);
            setComprimentoEmPes((valor * valordeUmPe).toFixed(2));
            setComprimentoEmPolegadas((valor * valorDeUmaPolegada).toFixed(2));
        } else if (nomeDoCampo === "pes") {
            setComprimentoEmPes(valor);
            setComprimentoEmMetros((valor / valordeUmPe).toFixed(2));
            setComprimentoEmPolegadas((valor * 12).toFixed(2));
        } else if (nomeDoCampo === "polegadas") {
            setComprimentoEmPolegadas(valor);
            setComprimentoEmMetros((valor / valorDeUmaPolegada).toFixed(2));
            setComprimentoEmPes((valor / 12).toFixed(2));
        }
    }
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-4">Conversor de comprimento</h1>
            <main className="flex justify-center items-center gap-4">
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em metros:</h2>
                    <input 
                        className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number" 
                        placeholder="Valor em R$" 
                        onChange={e => converterValor("metros", e.target.value)}
                        value={comprimentoEmMetros}
                    />
                </div>
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em pés:</h2>
                    <input 
                        onChange={e => converterValor("pes", e.target.value)}
                        className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number"
                        placeholder="Valor em U$"
                        value={comprimentoEmPes}
                    />
                </div>
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em polegadas:</h2>
                    <input
                        onChange={e => converterValor("polegadas", e.target.value)} 
                        className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number"
                        placeholder="Valor em U$"
                        value={comprimentoEmPolegadas}
                    />
                </div>
            </main>
        </div>
    )
}