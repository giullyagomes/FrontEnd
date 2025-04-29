"use client"

import { useState } from "react";

export default function Moedas() {
    const valorCotacaoDolar = 6.108;
    const [valorEmDolar, setValorEmDolar] = useState(0);
    const [valorEmReal, setValorEmReal] = useState(0);

    const converterRealParaDolar = (valorEmReal) => {
        const valorConvertido = valorEmReal / valorCotacaoDolar;
        setValorEmDolar(valorConvertido.toFixed(2));
        setValorEmReal(valorEmReal);
    }

    const converterDolarParaReal = (valorEmDolar) => {
        const valorConvertido = valorCotacaoDolar * valorEmDolar;
        setValorEmReal(valorConvertido.toFixed(2));
        setValorEmDolar(valorEmDolar);
    }
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-4">Conversor de Moedas</h1>
            <main className="flex justify-center items-center gap-4">
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em Real</h2>
                    <input 
                        className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number" 
                        placeholder="Valor em R$" 
                        onChange={e => converterRealParaDolar(e.target.value)}
                        value={valorEmReal}
                    />
                </div>
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em Dólar</h2>
                    <input 
                         className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number"
                        placeholder="Valor em U$"
                        onChange={e => converterDolarParaReal(e.target.value)}
                        value={valorEmDolar}
                    />
                </div>
            </main>
        </div>
    )
}