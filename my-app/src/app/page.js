function Texto1() {
  return <p>Um outro paragráfo de texto.</p>;
}

export default function Home() {
  const aula = 2;
  return (
    <div>
        <h1>Olá</h1>
          <p>Minha {aula}ª aula de React</p>
          <Texto1 />
          <Texto1 />
    </div>
  );
}
