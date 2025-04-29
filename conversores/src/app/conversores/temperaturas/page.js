"use client"

import { useState } from "react";

export default function Temperaturas() {
    const [temperaturaEmCelsius, setTemepraturaEmCelsius] = useState(0);
    const [temperaturaEmFahrenheit, setTemepraturaEmFahrenheit] = useState(0);

    const converterCelsiusParaFahrenheit= (temperatura) => {
        const valorConvertido = (temperatura * 9/5) + 32;
        setTemepraturaEmFahrenheit(valorConvertido.toFixed(2));
        setTemepraturaEmCelsius(temperatura);
    }

    const converterFahrenheitParaCelsius = (temperatura) => {
        const valorConvertido = (temperatura -32) * 5/9;
        setTemepraturaEmCelsius(valorConvertido.toFixed(2));
        setTemepraturaEmFahrenheit(temperatura);
    }
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-4">Conversor de Temperaturas</h1>
            <main className="flex justify-center items-center gap-4">
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em Celsius</h2>
                    <input 
                        className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number" 
                        placeholder="Valor em R$" 
                        onChange={e => converterCelsiusParaFahrenheit(e.target.value)}
                        value={temperaturaEmCelsius}
                    />
                </div>
                <div className="flex flex-col justify-around items-center bg-grey-100 h-[150] w-[300] rounded-sm">
                    <h2 className="font-bold text-center">Digite um valor em Fahrenheit</h2>
                    <input 
                         className="border-2 border-slate-500 rounded-sm block w-[95%] h-8"
                        type="number"
                        placeholder="Valor em U$"
                        onChange={e => converterFahrenheitParaCelsius(e.target.value)}
                        value={temperaturaEmFahrenheit}
                    />
                </div>
            </main>
        </div>
    )
}