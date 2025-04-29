import Link from "next/link";

export default function SobreMim() {
    return (
        <>
            <div className="flex flex-center items-center justify-center h-screen w-full gap-4">
                <header className="p-4 flex flex-col bg-green-1000 rounded-sm w-[400] h-[530] text-center justify-center items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Olá, me chamo Giullya.</p>
                        <p>Graduanda em Sistemas para Internet.</p>
                    </div>
                </header>
                <main className="p-4 flex flex-col bg-grey-500 rounded-sm w-[400] h-[530] text-center justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold">Meios para contato</h1>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-grey-500 duration-300" href="mailto:gomes.giullyav@gmail.com" target="_blank">E-mail</Link>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-grey-500 duration-300" href="https://" target="_blank">LinkedIn</Link>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-grey-500 duration-300" href="https://github.com/giullyagomes" target="_blank">GitHub</Link>
                </main>
            </div>
        </>
    );
}