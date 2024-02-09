export default function Home() {
  return (
    <main className="min-h-[100vh] w-ful">
      <header className="flex pl-5 justify-between items-center bg-green-700/30 text-white h-20 font-Monserrat">
        <img
          src="/contraloria-imagen.png"
          alt="logo"
          className="cursor-pointer"
        />
        <div className="flex [&>p]:cursor-pointer [&>p]:flex [&>p]:items-center [&>p]:justify-center [&>p]:h-full [&>p]:px-5 h-full [&>p]:transition-[background] duration-200 ease-in-out">
          <p className="hover:bg-green-600/30">Inicio</p>
          <p className="hover:bg-green-600/30">Buscar</p>
          <p className="hover:bg-green-600/30">Administrar</p>
          <p className="hover:bg-green-600/30">Gestionar</p>
          <p className="hover:bg-green-600/30">Configuracion</p>
        </div>
      </header>
    </main>
  );
}
