import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center">
        <main>
          <main className="mt-24 flex flex-col gap-8 text-center items-center">
            <p>Acesse os conversores através dos links abaixo:</p>
            <div className="flex items-center justify-center gap-4">
              <Link className="bg-gray-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/comprimento">Conversor de comprimento</Link>
              <Link className="bg-gray-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/moedas">Conversor de moedas</Link>
              <Link className="bg-gray-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/temperaturas">Conversor de temperaturas</Link>
            </div>
              <Link className="bg-gray-500 rounded-sm p-2 text-white font-bold w-72" href="/sobreMim/">Sobre mim</Link>
          </main>
        </main>
      </div>
    </>
  );
}