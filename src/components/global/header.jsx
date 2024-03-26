"use client";

import { useAuthContext } from "@/context/auth.context";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const { route, setRoute } = useAuthContext();

  const handleClick = (e) => {
    let route = e.target.innerText.toLowerCase();
    if (route === "inicio") route = "";
    setRoute(route);
    router.push(`/main/${route}`);
  };

  return (
    <header className="flex pl-5 justify-between items-center bg-green-700/30 text-white h-20 font-Monserrat relative">
      <img
        src="/contraloria-imagen.png"
        alt="logo"
        className="cursor-pointer"
      />
      <div className="flex [&>span]:cursor-pointer [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:h-full [&>span]:px-5 h-full [&>span]:transition-[background] duration-200 ease-in-out">
        <span
          id="1"
          onClick={handleClick}
          className={route == "" ? "bg-green-700/30" : `hover:bg-green-500/30`}
        >
          Inicio
        </span>
        <span
          id="1"
          onClick={handleClick}
          className={
            route == "buscar" ? "bg-green-700/30" : `hover:bg-green-500/30`
          }
        >
          Permisos
        </span>
        <span
          id="1"
          onClick={handleClick}
          className={
            route == "registrar" ? "bg-green-700/30" : `hover:bg-green-500/30`
          }
        >
          Registrar
        </span>
        <span
          id="1"
          onClick={handleClick}
          className={
            route == "configuracion"
              ? "bg-green700/30"
              : `hover:bg-green-500/30`
          }
        >
          Configuracion
        </span>
      </div>
    </header>
  );
}
