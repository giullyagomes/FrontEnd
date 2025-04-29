import Link from "next/link";

export default function Menu() {
    return (
        <div className="w-full h-24 bg-gray-500 m-auto flex items-center justify-between px-8">
            <ul className="flex items-center justify-center gap-x-16 text-white font-bold text-xl">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li><Link className="hover:underline" href="/conversores/moedas">Conversor de moedas</Link></li>
                <li><Link className="hover:underline" href="/conversores/temperaturas">Conversor de temperatura</Link></li>
                <li><Link className="hover:underline" href="/conversores/comprimento">Conversor de comprimento</Link></li>
                <li><Link className="hover:underline" href="/sobreMim">Sobre mim</Link></li>
            </ul>
        </div>
    )
}